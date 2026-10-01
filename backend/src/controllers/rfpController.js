const RFP = require('../models/RFP');
const User = require('../models/User');

// @desc    Get all RFPs
// @route   GET /api/rfps
// @access  Public
const getAllRFPs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = '-createdAt',
      category,
      status,
      search,
      minBudget,
      maxBudget
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (minBudget || maxBudget) {
      filter['budget.min'] = {};
      if (minBudget) filter['budget.min'].$gte = parseInt(minBudget);
      if (maxBudget) filter['budget.max'] = { $lte: parseInt(maxBudget) };
    }
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query
    const rfps = await RFP.find(filter)
      .populate('client', 'firstName lastName company email')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await RFP.countDocuments(filter);

    res.json({
      success: true,
      data: {
        rfps,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / parseInt(limit)),
          total,
          limit: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get RFPs error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching RFPs',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get single RFP
// @route   GET /api/rfps/:id
// @access  Public
const getRFP = async (req, res) => {
  try {
    const rfp = await RFP.findById(req.params.id)
      .populate('client', 'firstName lastName company email phone')
      .populate('invitedVendors', 'firstName lastName company email')
      .populate('responses.vendor', 'firstName lastName company email')
      .populate('responses.reviewedBy', 'firstName lastName');

    if (!rfp) {
      return res.status(404).json({
        success: false,
        message: 'RFP not found'
      });
    }

    res.json({
      success: true,
      data: { rfp }
    });
  } catch (error) {
    console.error('Get RFP error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching RFP',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Create new RFP
// @route   POST /api/rfps
// @access  Private (Client/Admin)
const createRFP = async (req, res) => {
  try {
    const rfpData = {
      ...req.body,
      client: req.user.id
    };

    const rfp = await RFP.create(rfpData);

    // Populate client info
    await rfp.populate('client', 'firstName lastName company email');

    res.status(201).json({
      success: true,
      message: 'RFP created successfully',
      data: { rfp }
    });
  } catch (error) {
    console.error('Create RFP error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating RFP',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Update RFP
// @route   PUT /api/rfps/:id
// @access  Private (Client/Admin)
const updateRFP = async (req, res) => {
  try {
    const rfp = await RFP.findById(req.params.id);

    if (!rfp) {
      return res.status(404).json({
        success: false,
        message: 'RFP not found'
      });
    }

    // Check if user owns the RFP or is admin
    if (rfp.client.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this RFP'
      });
    }

    const updatedRFP = await RFP.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('client', 'firstName lastName company email');

    res.json({
      success: true,
      message: 'RFP updated successfully',
      data: { rfp: updatedRFP }
    });
  } catch (error) {
    console.error('Update RFP error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating RFP',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Delete RFP
// @route   DELETE /api/rfps/:id
// @access  Private (Client/Admin)
const deleteRFP = async (req, res) => {
  try {
    const rfp = await RFP.findById(req.params.id);

    if (!rfp) {
      return res.status(404).json({
        success: false,
        message: 'RFP not found'
      });
    }

    // Check if user owns the RFP or is admin
    if (rfp.client.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this RFP'
      });
    }

    await RFP.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'RFP deleted successfully'
    });
  } catch (error) {
    console.error('Delete RFP error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting RFP',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Submit RFP response
// @route   POST /api/rfps/:id/responses
// @access  Private (Vendor)
const submitResponse = async (req, res) => {
  try {
    const rfp = await RFP.findById(req.params.id);

    if (!rfp) {
      return res.status(404).json({
        success: false,
        message: 'RFP not found'
      });
    }

    // Check if RFP is still accepting responses
    if (rfp.status !== 'published' && rfp.status !== 'in-progress') {
      return res.status(400).json({
        success: false,
        message: 'This RFP is no longer accepting responses'
      });
    }

    // Check if submission deadline has passed
    if (new Date() > new Date(rfp.timeline.submissionDeadline)) {
      return res.status(400).json({
        success: false,
        message: 'Submission deadline has passed'
      });
    }

    // Check if vendor has already submitted a response
    const existingResponse = rfp.responses.find(
      response => response.vendor.toString() === req.user.id
    );

    if (existingResponse) {
      return res.status(400).json({
        success: false,
        message: 'You have already submitted a response for this RFP'
      });
    }

    // Add response
    const responseData = {
      vendor: req.user.id,
      answers: req.body.answers,
      status: 'submitted',
      submittedAt: new Date()
    };

    rfp.responses.push(responseData);
    await rfp.save();

    res.status(201).json({
      success: true,
      message: 'Response submitted successfully',
      data: { response: responseData }
    });
  } catch (error) {
    console.error('Submit response error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while submitting response',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Get RFP responses
// @route   GET /api/rfps/:id/responses
// @access  Private (Client/Admin)
const getResponses = async (req, res) => {
  try {
    const rfp = await RFP.findById(req.params.id)
      .populate('responses.vendor', 'firstName lastName company email')
      .populate('responses.reviewedBy', 'firstName lastName');

    if (!rfp) {
      return res.status(404).json({
        success: false,
        message: 'RFP not found'
      });
    }

    // Check if user owns the RFP or is admin
    if (rfp.client.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view responses for this RFP'
      });
    }

    res.json({
      success: true,
      data: { responses: rfp.responses }
    });
  } catch (error) {
    console.error('Get responses error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching responses',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// @desc    Review RFP response
// @route   PUT /api/rfps/:id/responses/:responseId
// @access  Private (Client/Admin)
const reviewResponse = async (req, res) => {
  try {
    const { score, feedback, status } = req.body;

    const rfp = await RFP.findById(req.params.id);

    if (!rfp) {
      return res.status(404).json({
        success: false,
        message: 'RFP not found'
      });
    }

    // Check if user owns the RFP or is admin
    if (rfp.client.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to review responses for this RFP'
      });
    }

    const response = rfp.responses.id(req.params.responseId);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: 'Response not found'
      });
    }

    // Update response
    if (score !== undefined) response.score = score;
    if (feedback) response.feedback = feedback;
    if (status) response.status = status;
    response.reviewedBy = req.user.id;
    response.reviewedAt = new Date();

    await rfp.save();

    res.json({
      success: true,
      message: 'Response reviewed successfully',
      data: { response }
    });
  } catch (error) {
    console.error('Review response error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while reviewing response',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  getAllRFPs,
  getRFP,
  createRFP,
  updateRFP,
  deleteRFP,
  submitResponse,
  getResponses,
  reviewResponse
};


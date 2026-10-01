const express = require('express');
const router = express.Router();
const {
  getAllRFPs,
  getRFP,
  createRFP,
  updateRFP,
  deleteRFP,
  submitResponse,
  getResponses,
  reviewResponse
} = require('../controllers/rfpController');
const { protect, authorize } = require('../middleware/auth');
const {
  validateRFPCreation,
  validateRFPUpdate,
  validatePagination,
  validateObjectId
} = require('../middleware/validation');

// @route   GET /api/rfps
// @desc    Get all RFPs
// @access  Public
router.get('/', validatePagination, getAllRFPs);

// @route   GET /api/rfps/:id
// @desc    Get single RFP
// @access  Public
router.get('/:id', validateObjectId('id'), getRFP);

// @route   POST /api/rfps
// @desc    Create new RFP
// @access  Private (Client/Admin)
router.post('/', protect, authorize('client', 'admin'), validateRFPCreation, createRFP);

// @route   PUT /api/rfps/:id
// @desc    Update RFP
// @access  Private (Client/Admin)
router.put('/:id', protect, authorize('client', 'admin'), validateObjectId('id'), validateRFPUpdate, updateRFP);

// @route   DELETE /api/rfps/:id
// @desc    Delete RFP
// @access  Private (Client/Admin)
router.delete('/:id', protect, authorize('client', 'admin'), validateObjectId('id'), deleteRFP);

// @route   POST /api/rfps/:id/responses
// @desc    Submit RFP response
// @access  Private (Vendor)
router.post('/:id/responses', protect, authorize('vendor'), validateObjectId('id'), submitResponse);

// @route   GET /api/rfps/:id/responses
// @desc    Get RFP responses
// @access  Private (Client/Admin)
router.get('/:id/responses', protect, authorize('client', 'admin'), validateObjectId('id'), getResponses);

// @route   PUT /api/rfps/:id/responses/:responseId
// @desc    Review RFP response
// @access  Private (Client/Admin)
router.put('/:id/responses/:responseId', protect, authorize('client', 'admin'), validateObjectId('id'), validateObjectId('responseId'), reviewResponse);

module.exports = router;


const mongoose = require('mongoose');

const rfpSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'RFP title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'RFP description is required'],
    trim: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Client is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'technology',
      'consulting',
      'marketing',
      'construction',
      'healthcare',
      'finance',
      'education',
      'government',
      'other'
    ]
  },
  budget: {
    min: {
      type: Number,
      min: [0, 'Minimum budget cannot be negative']
    },
    max: {
      type: Number,
      min: [0, 'Maximum budget cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD',
      enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD']
    }
  },
  timeline: {
    startDate: {
      type: Date,
      required: [true, 'Start date is required']
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required']
    },
    submissionDeadline: {
      type: Date,
      required: [true, 'Submission deadline is required']
    }
  },
  requirements: {
    technical: [String],
    business: [String],
    compliance: [String],
    certifications: [String]
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'in-progress', 'closed', 'awarded'],
    default: 'draft'
  },
  visibility: {
    type: String,
    enum: ['public', 'private', 'invited'],
    default: 'public'
  },
  invitedVendors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  attachments: [{
    filename: String,
    originalName: String,
    path: String,
    size: Number,
    mimeType: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  evaluationCriteria: [{
    criterion: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    description: String
  }],
  questions: [{
    question: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['text', 'multiple-choice', 'file', 'number'],
      default: 'text'
    },
    options: [String],
    required: {
      type: Boolean,
      default: true
    }
  }],
  responses: [{
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    submittedAt: {
      type: Date,
      default: Date.now
    },
    answers: [{
      questionId: mongoose.Schema.Types.ObjectId,
      answer: mongoose.Schema.Types.Mixed,
      attachments: [String]
    }],
    status: {
      type: String,
      enum: ['draft', 'submitted', 'under-review', 'accepted', 'rejected'],
      default: 'draft'
    },
    score: {
      type: Number,
      min: 0,
      max: 100
    },
    feedback: String,
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reviewedAt: Date
  }],
  tags: [String],
  location: {
    country: String,
    state: String,
    city: String,
    remote: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for response count
rfpSchema.virtual('responseCount').get(function() {
  return this.responses ? this.responses.length : 0;
});

// Virtual for days until deadline
rfpSchema.virtual('daysUntilDeadline').get(function() {
  if (!this.timeline.submissionDeadline) return null;
  const now = new Date();
  const deadline = new Date(this.timeline.submissionDeadline);
  const diffTime = deadline - now;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Indexes for better query performance
rfpSchema.index({ client: 1 });
rfpSchema.index({ status: 1 });
rfpSchema.index({ category: 1 });
rfpSchema.index({ 'timeline.submissionDeadline': 1 });
rfpSchema.index({ createdAt: -1 });
rfpSchema.index({ tags: 1 });

// Text search index
rfpSchema.index({
  title: 'text',
  description: 'text',
  tags: 'text'
});

module.exports = mongoose.model('RFP', rfpSchema);


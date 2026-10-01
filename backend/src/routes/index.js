const express = require('express');
const router = express.Router();

// Import route modules
const authRoutes = require('./auth');
const rfpRoutes = require('./rfps');

// Health check route
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'RFP Pro API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API routes
router.use('/auth', authRoutes);
router.use('/rfps', rfpRoutes);

// 404 handler for API routes
router.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API route ${req.originalUrl} not found`
  });
});

module.exports = router;


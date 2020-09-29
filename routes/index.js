const express = require('express');
const router = express.Router();

// @desc    Login and landing page
// @route   GET /
router.get('/', (req, res) => {
  res.json({ page: 'Login' });
});

// @desc    Dashboard page
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
  res.json({ page: 'Dashboard' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  getMaintenanceRequests,
  addMaintenanceRequest,
  updateMaintenanceRequest
} = require('../controllers/maintenanceController');

// Routes
router.get('/', getMaintenanceRequests);
router.post('/', addMaintenanceRequest);
router.put('/:id', updateMaintenanceRequest);

module.exports = router;

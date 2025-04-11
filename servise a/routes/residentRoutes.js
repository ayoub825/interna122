const express = require('express');
const router = express.Router();
const {
  getResidents,
  addResident,
  updateResident,
  deleteResident,
  getRooms
} = require('../controllers/residentController');

// Routes
router.get('/', getResidents);
router.post('/', addResident);
router.put('/:id', updateResident);
router.delete('/:id', deleteResident);
router.get('/rooms', getRooms);

module.exports = router;

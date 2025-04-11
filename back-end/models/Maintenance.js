const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  description: { type: String, required: true },
  room: { type: Number },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);

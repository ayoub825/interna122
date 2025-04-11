const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String },
  filiere: { type: String },
  chambre: { type: Number },
  avec: [String],
});

module.exports = mongoose.model('Resident', residentSchema);

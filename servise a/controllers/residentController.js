// Mock data (in the future, replace this with MongoDB models)
let residents = [
    { id: 1, name: 'Lamia Ouahddou', level: 'Deuxième année', filiere: 'DEVWFS', chambre: 12, avec: ['noha baadi', 'houda daoui'] },
    { id: 2, name: 'Amina El Khatabi', level: 'Première année', filiere: 'ESA', chambre: 10, avec: ['Souad majd'] },
  ];
  
  const getResidents = (req, res) => {
    res.json(residents);
  };
  
  const addResident = (req, res) => {
    const newResident = { id: Date.now(), ...req.body };
    residents.push(newResident);
    res.status(201).json(newResident);
  };
  
  const updateResident = (req, res) => {
    const { id } = req.params;
    const index = residents.findIndex(r => r.id == id);
    if (index !== -1) {
      residents[index] = { ...residents[index], ...req.body };
      res.json(residents[index]);
    } else {
      res.status(404).json({ message: 'Resident not found' });
    }
  };
  
  const deleteResident = (req, res) => {
    const { id } = req.params;
    residents = residents.filter(r => r.id != id);
    res.json({ message: 'Resident deleted' });
  };
  
  const getRooms = (req, res) => {
    const rooms = {};
    residents.forEach(resident => {
      if (!rooms[resident.chambre]) rooms[resident.chambre] = [];
      rooms[resident.chambre].push(resident.name);
    });
    res.json(rooms);
  };
  
  module.exports = {
    getResidents,
    addResident,
    updateResident,
    deleteResident,
    getRooms
  };
  
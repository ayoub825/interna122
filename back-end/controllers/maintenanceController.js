// Mock data (replace with MongoDB models later)
let maintenanceRequests = [];

const getMaintenanceRequests = (req, res) => {
  res.json(maintenanceRequests);
};

const addMaintenanceRequest = (req, res) => {
  const newRequest = { id: Date.now(), status: 'pending', ...req.body };
  maintenanceRequests.push(newRequest);
  res.status(201).json(newRequest);
};

const updateMaintenanceRequest = (req, res) => {
  const { id } = req.params;
  const index = maintenanceRequests.findIndex(m => m.id == id);
  if (index !== -1) {
    maintenanceRequests[index] = { ...maintenanceRequests[index], ...req.body };
    res.json(maintenanceRequests[index]);
  } else {
    res.status(404).json({ message: 'Maintenance request not found' });
  }
};

module.exports = {
  getMaintenanceRequests,
  addMaintenanceRequest,
  updateMaintenanceRequest
};

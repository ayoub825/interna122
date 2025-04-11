const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const residentRoutes = require('./routes/residentRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');

app.use('/api/residents', residentRoutes);
app.use('/api/maintenance', maintenanceRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

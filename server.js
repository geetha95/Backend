const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Sample data
const employees = [
  { id: 1, name: "John Doe", role: "Developer" },
  { id: 2, name: "Jane Smith", role: "Designer" },
  { id: 3, name: "Mark Wilson", role: "Manager" }
];

// API Endpoint
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

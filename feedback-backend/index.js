const express = require('express');
const cors = require('cors');
const app = express();
const feedbackRoutes = require('./routes/feedback');

app.use(cors());
app.use(express.json());
app.use(feedbackRoutes);

app.listen(5000, () => console.log('✅ Server running on http://localhost:5000'));

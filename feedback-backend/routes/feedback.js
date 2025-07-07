const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/feedback', async (req, res) => {
  console.log('👉 Received:', req.body);
  const {
    name,
    instructor_performance,
    assignment_clarity,
    peer_interaction,
    technical_support,
    interaction_encouraged,
    general_feedback,
    suggestions
  } = req.body;

  try {
    await pool.query(`
      INSERT INTO feedback (
        name, instructor_performance, assignment_clarity,
        peer_interaction, technical_support, interaction_encouraged,
        general_feedback, suggestions
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    `, [
      name,
      instructor_performance,
      assignment_clarity,
      peer_interaction,
      technical_support,
      interaction_encouraged,
      general_feedback,
      suggestions
    ]);
    console.log('✅ Saved to DB');
    res.json({ message: 'Feedback submitted' });
  } catch (err) {
    console.error('❌ DB error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

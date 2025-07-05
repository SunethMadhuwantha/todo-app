const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM task WHERE is_completed = FALSE ORDER BY created_at DESC LIMIT 5'
  );
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const result = await pool.query(
    'INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  res.status(201).json(result.rows[0]);
});

router.put('/:id/done', async (req, res) => {
  const { id } = req.params;
  await pool.query(
    'UPDATE task SET is_completed = TRUE WHERE id = $1',
    [id]
  );
  res.sendStatus(204);
});

module.exports = router;

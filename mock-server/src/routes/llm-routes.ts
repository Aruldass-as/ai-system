import { Router } from 'express';
import { mockModels } from '../data/mock-data.js';

const router = Router();

router.get('/models', (_req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.json({
    data: mockModels,
  });
});

router.post('/chat', (req, res) => {
  const { message } = req.body;

  res.json({
    id: 'mock-response-001',
    message: `Mock response for: ${message}`,
    model: 'gpt-5',
  });
});

export default router;
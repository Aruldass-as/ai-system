import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    agents: [
      {
        id: 'agent-001',
        name: 'Research Agent',
        status: 'active',
      },
      {
        id: 'agent-002',
        name: 'Coding Agent',
        status: 'active',
      },
    ],
  });
});

export default router;
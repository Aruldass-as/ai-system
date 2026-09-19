import { Router } from 'express';

const router = Router();

router.get('/tools', (_req, res) => {
  res.json({
    tools: [
      {
        name: 'search',
        description: 'Search information',
      },
      {
        name: 'calculator',
        description: 'Perform calculations',
      },
      {
        name: 'weather',
        description: 'Get weather information',
      },
    ],
  });
});

export default router;
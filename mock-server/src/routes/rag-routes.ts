import { Router } from 'express';

const router = Router();

router.post('/search', (req, res) => {
  const { query } = req.body;

  res.json({
    query,
    results: [
      {
        id: 'doc-001',
        title: 'AI Architecture',
        score: 0.95,
        content: 'This is a mock RAG search result.',
      },
      {
        id: 'doc-002',
        title: 'Microfrontend Architecture',
        score: 0.89,
        content: 'This is another mock RAG result.',
      },
    ],
  });
});

export default router;
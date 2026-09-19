import express from 'express';
import cors from 'cors';

import llmRoutes from './routes/llm-routes.js';
import mcpRoutes from './routes/mcp-routes.js';
import ragRoutes from './routes/rag-routes.js';
import agentsRoutes from './routes/agents-routes.js';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'mock-server',
  });
});

app.use('/api/llm', llmRoutes);
app.use('/api/mcp', mcpRoutes);
app.use('/api/rag', ragRoutes);
app.use('/api/agents', agentsRoutes);

app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
});
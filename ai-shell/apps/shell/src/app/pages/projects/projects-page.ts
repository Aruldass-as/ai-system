import { Component } from '@angular/core';

type PortfolioProject = {
  name: string;
  description: string;
  tags: string[];
  kind: string;
  action: string;
};

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {
  protected readonly featured: PortfolioProject[] = [
    { name: 'LLM', description: 'LLM Application', tags: ['Angular', 'FastAPI', 'LLM'], kind: 'LLM', action: 'Live' },
    { name: 'MCP', description: 'Model Control Protocol Application', tags: ['Angular', 'FastAPI', 'MCP'], kind: 'MCP', action: 'Live' },
    { name: 'RAG', description: 'Retrieval-Augmented Generation Application', tags: ['Angular', 'FastAPI', 'RAG'], kind: 'RAG', action: 'Live' },
    { name: 'AI Agents', description: 'AI Agents Application', tags: ['Angular', 'FastAPI', 'AI Agents'], kind: 'AI Agents', action: 'Live' },
    { name: 'Agentic AI', description: 'Agentic AI Application', tags: ['Angular', 'FastAPI', 'Agentic AI'], kind: 'Agentic AI', action: 'Live' },
  ];

  protected readonly small: PortfolioProject[] = [
    { name: 'ChertNodes', description: 'Minecraft server control panel', tags: ['HTML', 'CSS', 'JavaScript'], kind: 'nodes', action: 'GitHub' },
    { name: 'Discord Bot', description: 'A small bot for everyday server tasks', tags: ['Discord.js', 'Node.js'], kind: 'discord', action: 'GitHub' },
    { name: 'Portfolio v2', description: 'A study in layouts and typography', tags: ['Vue', 'SCSS'], kind: 'portfolio', action: 'Live' },
    { name: 'Landing Page', description: 'A compact product launch page', tags: ['HTML', 'CSS'], kind: 'studio', action: 'Live' },
    { name: 'Dashboard', description: 'An interface for monitoring services', tags: ['React', 'TypeScript'], kind: 'quiz', action: 'Live' },
  ];
}
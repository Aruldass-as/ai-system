import { Route } from '@angular/router';

export const routes: Route[] = [
    {
    path: '',
    loadComponent: () =>
      import('./mcp-page/mcp-page').then(
        (m) => m.McpPage
      ),
  },
];

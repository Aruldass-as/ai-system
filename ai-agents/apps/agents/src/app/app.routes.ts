import { Route } from '@angular/router';

export const routes: Route[] = [
    {
    path: '',
    loadComponent: () =>
      import('./agents-page/agents-page').then(
        (m) => m.AgentsPage
      ),
  },
];

import { Route } from '@angular/router';

export const routes: Route[] = [
    {
    path: '',
    loadComponent: () =>
      import('./rag-page/rag-page').then(
        (m) => m.RagPage
      ),
  },
];

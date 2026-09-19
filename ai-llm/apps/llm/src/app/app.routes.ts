import { Route } from '@angular/router';

export const routes: Route[] = [
    {
    path: '',
    loadComponent: () =>
      import('./llm-page/llm-page').then(
        (m) => m.LlmPage
      ),
  },
];

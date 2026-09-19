import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
    {
    path: '',
    redirectTo: 'llm',
    pathMatch: 'full',
  },
  {
    path: 'llm',
    loadChildren: () =>
      loadRemoteModule('llm', './Routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'mcp',
    loadChildren: () =>
      loadRemoteModule('mcp', './Routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'rag',
    loadChildren: () =>
      loadRemoteModule('rag', './Routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'agents',
    loadChildren: () =>
      loadRemoteModule('agents', './Routes').then(
        (m) => m.routes
      ),
  },
];

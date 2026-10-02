import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomePage } from './pages/home/home-page';
import { AboutPage } from './pages/about/about-page';
import { ContactPage } from './pages/contact/contact-page';
import { ProjectsPage } from './pages/projects/projects-page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePage,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: 'projects',
    component: ProjectsPage,
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

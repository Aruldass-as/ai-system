import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteHeader } from './components/site-header/site-header';
import { SiteFooter } from './components/site-footer/site-footer';
// import { NxWelcome } from './nx-welcome';

@Component({
  imports: [RouterModule, SiteHeader, SiteFooter],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'shell';
}

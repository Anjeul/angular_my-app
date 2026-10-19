import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from './shared/page-header/page-header';

@Component({
  imports: [RouterOutlet, PageHeader],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly appName = 'TechCorp RH';
  protected readonly userName = signal('Claire Martin');
  protected readonly navOpen = signal(false);
  protected toggleNav(): void {
    this.navOpen.update((open) => !open);
  }
}

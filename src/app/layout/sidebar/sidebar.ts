import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  host: {
    class: 'app__sidebar sidebar',
    id: 'navigation',
  },
})
export class Sidebar {}

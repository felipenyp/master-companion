import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  options = [
    {
      icon: 'fa-solid fas fa-home',
      text: 'Home',
      route: '/home',
    },
    {
      icon: 'fa-solid fa-user-group',
      text: 'PCs',
      route: 'pj/index',
    },
    {
      icon: 'fa-solid fa-users',
      text: 'NPCs',
      route: 'npc/index',
    },
    {
      icon: 'fa-solid fa-book-open',
      text: 'Spells',
      route: 'spell/index',
    },
    {
      icon: 'fa-solid fa-spaghetti-monster-flying',
      text: 'Encounters',
      route: 'encounter/index',
    },
    {
      icon: 'fa-solid fa-sack-dollar',
      text: 'Loot',
      route: 'loot/index',
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: 'Places',
      route: 'place/index',
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClick(e, option) {
    e.preventDefault();
    if (e.which == 2) {
      window.open(option.route);
    }
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter();
  links = [
    {path: '/', name: 'Главная'},
    {path: '/фото', name: 'Фото'},
    {path: '/видео', name: 'Видео'},
    {path: '/экскурсии', name: 'Экскурсии'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.closeDrawer.emit();
  }
}

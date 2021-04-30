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
    {path: '/мероприятия', name: 'Мероприятия'},
  ];
  socialLinks = [
    {path: 'https://vk.com/aquanarium', icon: '/assets/icons/vk.svg', alt: 'vk'},
    {path: 'https://www.instagram.com/aquanarium/', icon: '/assets/icons/instagram.svg', alt: 'ins'},
    {path: 'https://www.facebook.com/groups/aquanarium/', icon: '/assets/icons/facebook.svg', alt: 'fb'},
    {path: 'https://www.ok.ru/aquanarium', icon: '/assets/icons/odnoklassniki.svg', alt: 'ok'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.closeDrawer.emit();
  }
}

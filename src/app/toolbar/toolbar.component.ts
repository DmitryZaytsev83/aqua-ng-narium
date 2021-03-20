import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleDrawer = new EventEmitter();

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleDrawer.emit();
  }

  getPage(): string {
    switch (decodeURI(this.router.url.toString())) {
      case '/':
        return 'Главная';
      case '/фото':
        return 'Фото';
      case '/видео':
        return 'Видео';
      case '/экскурсии':
        return 'Экскурсии';
      default:
        return 'Страница';
    }
  }

  goHome(): void {
    this.router.navigateByUrl('/');
  }
}

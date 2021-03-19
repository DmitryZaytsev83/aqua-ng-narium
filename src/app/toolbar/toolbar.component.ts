import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleDrawer = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggleDrawer.emit();
  }
}
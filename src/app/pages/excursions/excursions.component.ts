import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LinksService} from '../../services/links.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {
  @ViewChild('target') target!: ElementRef;

  constructor(private linksService: LinksService) {
  }

  ngOnInit(): void {
  }
}

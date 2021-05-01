import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LinksService} from '../../services/links.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit, AfterViewInit {
  @ViewChild('target') target!: ElementRef;

  constructor(private linksService: LinksService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.linksService.getExcursionClick()) {
      this.linksService.setExcursionClick(false);
      setTimeout(() => this.target.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 50);
    }
  }
}

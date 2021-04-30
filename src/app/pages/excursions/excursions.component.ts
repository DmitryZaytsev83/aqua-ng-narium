import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SchoolProgramService} from '../../services/school-program.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit, AfterViewInit {
  @ViewChild('target') target!: ElementRef;

  constructor(private schoolProgram: SchoolProgramService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.schoolProgram.getButtonClick()) {
      this.schoolProgram.setButtonClick(false);
      setTimeout(() => this.target.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}), 50);
    }
  }
}

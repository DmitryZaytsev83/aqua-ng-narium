import {AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LinksService} from '../../services/links.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, DoCheck {
  @ViewChild('target') target!: ElementRef;

  constructor(private schoolService: LinksService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.schoolService.getContactsClick()) {
      this.schoolService.setContactsClick(false);
      setTimeout(() => this.target.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      }), 400);
    }
  }

  toSchoolPage(): void {
    this.router.navigateByUrl('/школы').then(r => null);
  }
}

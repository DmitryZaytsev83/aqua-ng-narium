import {Component, OnInit} from '@angular/core';
import {SchoolProgramService} from '../../services/school-program.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private schoolService: SchoolProgramService, private router: Router) {
  }

  ngOnInit(): void {
  }

  goToExcursionPage(): void {
    this.schoolService.setButtonClick(true);
    this.router.navigateByUrl('/экскурсии');
  }
}

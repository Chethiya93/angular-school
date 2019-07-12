import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { ISchool } from './school';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  schoolDetails: ISchool[];

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    // this.getSchoolDetails();
  }

  getSchoolDetails(): void {
    this.schoolService.getSchools().subscribe(
      data => {
        console.log(data);
        this.schoolDetails = data;
      }
    );
  }

  fetchData(): void {
    this.getSchoolDetails();
  }

}

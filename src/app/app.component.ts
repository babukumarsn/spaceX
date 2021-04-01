import { Component, OnInit } from '@angular/core';
import { AllApiService } from './all-api.service';
import { Launches } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  launchesData: any;
  listOfYears: any;

  constructor(private allApiService: AllApiService) {

  }

  ngOnInit() {
    this.allApiService.getSpaceData();
    this.allApiService.launchesData.subscribe(data => {
      this.launchesData = data;
      console.log(data);
    });
    this.allApiService.listOfYears.subscribe(data => {
      this.listOfYears = data;
      console.log('years', data);
    });
  }
}

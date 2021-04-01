import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllApiService } from '../all-api.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent {
  private copyLaunchesData: any;
  launchesData: any;

  constructor(private allApiService: AllApiService,
    private route: ActivatedRoute) {
    this.loadData();
  }

  private loadData(): void {
    this.allApiService.launchesData.subscribe(data => {
      this.copyLaunchesData = data;
      this.launchesData = data;
      this.route.queryParams.subscribe(data => {
        if (this.copyLaunchesData) {
          this.launchesData = this.copyLaunchesData.filter((item: any) => {
            return (!data.year || (item.year === parseInt(data.year)) &&
              (!data.launch || (String(item.success) === data.launch)) &&
              (!data.landing || (String(item.tbd) === data.landing)));
          });
        }
      });
    });
  }
}

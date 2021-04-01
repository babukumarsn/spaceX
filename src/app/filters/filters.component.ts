import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() listOfYears: any;
  queryParam: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      console.log('data', data);
      this.queryParam = data;
    });
  }

  onSelectYear(year: number): void {
    let yearVal = this.queryParam.year === String(year) ? '' : year;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        year: yearVal
      },
      queryParamsHandling: 'merge'
    });
  }

  onSelectLanuch(launch: string): void {
    let launchVal = this.queryParam.launch === String(launch) ? '' : launch;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        launch: launchVal
      },
      queryParamsHandling: 'merge'
    });
  }

  onSelectLanding(landing: string): void {
    let landingVal = this.queryParam.landing === String(landing) ? '' : landing;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        landing: landingVal
      },
      queryParamsHandling: 'merge'
    });
  }

}

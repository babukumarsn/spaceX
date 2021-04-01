import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Launches } from './model';

@Injectable({
  providedIn: 'root'
})
export class AllApiService {
  launchesData: BehaviorSubject<any> = new BehaviorSubject([]);
  listOfYears: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getSpaceData(): void {
    this.http.get<Launches[]>('https://api.spacexdata.com/v4/Launches').subscribe(data => {
      let yearList: any = [];
      data.forEach(item => {
        let fullYear: number = this.convertDate(item.date_utc);
        item.year = fullYear;
        yearList.push(fullYear);
      });
      this.listOfYears.next([...new Set(yearList)]);
      this.launchesData.next(data);
    });
  }

  convertDate(date: string): number {
    const newDate = new Date(date);
    return newDate.getFullYear();
  }

}

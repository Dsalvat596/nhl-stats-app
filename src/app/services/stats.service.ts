import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
public currentYearStats;
public statsUpdated: Observable<any[]>;
private statsSubject: Subject<any[]>;
  constructor(private http: HttpClient) {
    this.statsSubject = new Subject<any[]>();
    this.statsUpdated = this.statsSubject.asObservable();
   }


  getCurrentSeasonStats(playerId: Number){
    this.http.get('https://statsapi.web.nhl.com/api/v1/people/'+ playerId +'/stats?stats=statsSingleSeason&season=20182019')
      .subscribe((data)=>{
        let parsed = data['stats'][0].splits;
        this.currentYearStats = parsed;
        this.statsSubject.next(this.currentYearStats);
    })
  }

getSelectSeasonStats(playerId: Number, season: String){
  this.http.get('https://statsapi.web.nhl.com/api/v1/people/'+ playerId +'/stats?stats=statsSingleSeason&season='+ season)
  .subscribe((data)=>{
    let parsed = data['stats'][0].splits;
    this.currentYearStats = parsed;
    this.statsSubject.next(this.currentYearStats);
  })
}
}

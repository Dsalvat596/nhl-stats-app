import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  public allTeams = [];
  public teamsUpdated: Observable<any[]>;
  private teamsSubject: Subject<any[]>;

  constructor(private http: HttpClient) { 
    this.teamsSubject = new Subject<any[]>();
    this.teamsUpdated = this.teamsSubject.asObservable();
  }

  getTeams(){
    this.http.get<any>('https://statsapi.web.nhl.com/api/v1/teams').subscribe((data)=>{
      let parsed =  data['teams'];
      this.allTeams = parsed;
      this.teamsSubject.next(this.allTeams);
    })
  }

}

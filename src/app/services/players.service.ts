import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

    getPlayers(teamId: number){
    this.http.get<any>('https://statsapi.web.nhl.com/api/v1/teams/' + teamId + '?expand=team.roster').subscribe
  }
}

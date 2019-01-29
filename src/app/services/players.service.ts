import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  teamPlayers = [];
  selectedPlayer;
  public playersUpdated: Observable<any[]>;
  private playersSubject: Subject<any[]>;
  public selectedPlayerUpdated: Observable<any>;
  private selectedPlayerSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.playersSubject = new Subject<any>();
    this.playersUpdated = this.playersSubject.asObservable();
    this.selectedPlayerSubject = new Subject<any>();
    this.selectedPlayerUpdated = this.selectedPlayerSubject.asObservable();
   }

    getRoster(teamId: number){
    this.http.get<any>('https://statsapi.web.nhl.com/api/v1/teams/' + teamId + '?expand=team.roster').subscribe((data)=>{
      let parsed = data['teams']
      let roster = parsed[0].roster.roster
      this.teamPlayers = roster
      this.playersSubject.next(this.teamPlayers);
    })
  }

  getPlayerDetails(playerId: number){
    this.http.get<any>('https://statsapi.web.nhl.com/api/v1/people/' + playerId).subscribe((data)=>{
      let parsedPlayer = data.people[0];
      this.selectedPlayer = parsedPlayer;
      this.selectedPlayerSubject.next(this.selectedPlayer);
    })
  }
}

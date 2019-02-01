import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  teamPlayers = [];
  selectedPlayer;
  public playersUpdated: Observable<Player[]>;
  private playersSubject: Subject<Player[]>;
  public selectedPlayerUpdated: Observable<Player>;
  private selectedPlayerSubject: Subject<Player>;

  constructor(private http: HttpClient) {
    this.playersSubject = new Subject<Player[]>();
    this.playersUpdated = this.playersSubject.asObservable();
    this.selectedPlayerSubject = new Subject<Player>();
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

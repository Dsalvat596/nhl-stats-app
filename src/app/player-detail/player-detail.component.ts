import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Player } from '../models/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit, OnDestroy {
public thisPlayer: Player;
private sub: Subscription;
  constructor(private playersService: PlayersService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const playerId = this.route.snapshot.params['playerId'];
    this.playersService.getPlayerDetails(playerId);
    this.sub = this.playersService.selectedPlayerUpdated.subscribe((data: Player) =>{
      this.thisPlayer = data;
      console.log(this.thisPlayer)
    })
  }

  navBackToTeam(id: number){
    this.router.navigateByUrl('/teams/' + id +'/roster');
  }
  

  noProfile(element){
    element.onerror='';
    element.src='src/assets/img/profile/profile.png'
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}

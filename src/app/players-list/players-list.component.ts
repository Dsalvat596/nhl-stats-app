import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit { 
  team: string;
  teamId: number; 
  teamPlayers = [];
  selectedPlayer;

  constructor(private playersService: PlayersService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.teamId = +params.id;
      this.playersService.getRoster(this.teamId);
      this.playersService.playersUpdated.subscribe((data)=>{
        this.teamPlayers = data.sort(function(a,b){
          var aName = a.person.fullName.split(" ");
          var bName = b.person.fullName.split(" ");
          var aLast = aName[aName.length-1];
          var bLast = bName[bName.length-1];
          if(aLast < bLast) { return -1; }
          if(aLast > bLast) { return 1; }
          return 0;
        })
      })
    })
  }


  getPlayerDetails(player){
     let playerId = +player.person.id
     this.playersService.getPlayerDetails(playerId)
     this.playersService.selectedPlayerUpdated.subscribe((data)=>{
       this.selectedPlayer = data;
       console.log(this.selectedPlayer);
     })
  }

}

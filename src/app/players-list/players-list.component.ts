import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PlayerPopupComponent } from '../player-popup/player-popup.component';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit { 
  teamId: number; 
  teamPlayers = [];
  selectedPlayer;

  constructor(private playersService: PlayersService,  private route: ActivatedRoute, private router: Router,  public dialog: MatDialog) { }

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
     this.playersService.selectedPlayerUpdated
     .pipe(take(1))
     .subscribe((data)=>{
       this.selectedPlayer = data;

       let dialogRef = this.dialog.open(PlayerPopupComponent, {
        data: this.selectedPlayer
       });
       dialogRef.afterClosed()
       .pipe(take(1))
       .subscribe((result)=>{
         dialogRef = null;
       });
     });
  }

}

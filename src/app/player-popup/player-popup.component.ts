import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlayersListComponent } from '../players-list/players-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-popup',
  templateUrl: './player-popup.component.html',
  styleUrls: ['./player-popup.component.css']
})
export class PlayerPopupComponent implements OnInit {
 public thisPlayer: Player

  constructor(public dialogRef: MatDialogRef<PlayersListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.thisPlayer = this.data
  }

  goToPlayerDetails(playerId: number){
    this.router.navigate(['player/details/' + playerId])
    this.dialogRef.close();
  }
}

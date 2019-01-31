import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlayersListComponent } from '../players-list/players-list.component';

@Component({
  selector: 'app-player-popup',
  templateUrl: './player-popup.component.html',
  styleUrls: ['./player-popup.component.css']
})
export class PlayerPopupComponent implements OnInit {
 public thisPlayer

  constructor(public dialogRef: MatDialogRef<PlayersListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.thisPlayer = this.data
    console.log(this.thisPlayer)
  }
}

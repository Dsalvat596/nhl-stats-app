import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'hockey-app';
  allTeams: any = [];
  constructor(private teamsService: TeamsService){

  }
  ngOnInit(){
    this.teamsService.getTeams();
    this.teamsService.teamsUpdated.subscribe((data)=>{
      this.allTeams = data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      console.log(this.allTeams);
    })
  }

  getTeamData(team){
    console.log(team.id)
  }
}

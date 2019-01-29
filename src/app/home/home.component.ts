import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'hockey-app';
  allTeams: any = [];
  constructor(private teamsService: TeamsService, private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(){
    this.teamsService.getTeams();
    this.teamsService.teamsUpdated.subscribe((data)=>{
      this.allTeams = data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    })
  }

  seeRoster(team){
    let id = team.id
    this.router.navigate( [id], {relativeTo: this.route} )
  }
}

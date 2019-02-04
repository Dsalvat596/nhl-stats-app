import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { Player } from '../models/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-season-stats',
  templateUrl: './current-season-stats.component.html',
  styleUrls: ['./current-season-stats.component.css']
})
export class CurrentSeasonStatsComponent implements OnInit, OnDestroy {
  @Input() player: Player
  season: string;
  currentYearStats;
  sub: Subscription;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.statsService.getCurrentSeasonStats(this.player.id);
    this.sub = this.statsService.statsUpdated.subscribe((data)=>{
      this.season = data[0].season;
      this.currentYearStats = data[0].stat;
      console.log(this.currentYearStats);
    })
  }

  onSelectSeason(season: string){
    this.statsService.getSelectSeasonStats(this.player.id, season);
    this.sub = this.statsService.statsUpdated.subscribe((data)=>{
      this.season = season;
      this.currentYearStats = data[0].stat;
      console.log(this.currentYearStats);
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StatsService } from '../services/stats.service';
import { Player } from '../models/player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-season-stats',
  templateUrl: './season-stats.component.html',
  styleUrls: ['./season-stats.component.css']
})
export class SeasonStatsComponent implements OnInit, OnDestroy {
  @Input() player: Player
  season: string;
  noStats: boolean = false;
  currentYearStats;
  sub: Subscription;
  seasons = ['20182019','20172018','20162017','20152016','20142015','20132014','20122013','20112012','20102011','20092010','20082009']

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    // this.statsService.getCurrentSeasonStats(this.player.id);
    // this.sub = this.statsService.statsUpdated.subscribe((data)=>{
    //   this.season = data[0].season;
    //   this.currentYearStats = data[0].stat;
      
    // })
    this.season = this.seasons[0];
    this.onSelectSeason(this.season);
  }

  onSelectSeason(season: string){
    this.statsService.getSelectSeasonStats(this.player.id, season);
    this.sub = this.statsService.statsUpdated.subscribe((data)=>{
      if(data.length < 1){
        this.noStats = true;
        this.season = season;
      } else if (data.length >= 1){
        this.noStats = false;
      this.season = season;
      this.currentYearStats = data[0].stat;
      }
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

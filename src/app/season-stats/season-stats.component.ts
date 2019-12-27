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
  seasonFormatted: string;
  // seasonUnf: string;
  noStats: boolean = false;
  currentYearStats;
  sub: Subscription;
  seasons = ['2019-2020','2018-2019','2017-2018','2016-2017','2015-2016','2014-2015','2013-2014','2012-2013','2011-2012','2010-2011','2009-2010','2008-2009']

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    // this.statsService.getCurrentSeasonStats(this.player.id);
    // this.sub = this.statsService.statsUpdated.subscribe((data)=>{
    //   this.season = data[0].season;
    //   this.currentYearStats = data[0].stat;
      
    // })
    // this.seasonFormatted = this.seasons[0];
    // let seasonUnf = this.seasonFormatted.replace("-", "");
    this.onSelectSeason(this.seasons[0]);
  }

  onSelectSeason(season: string){
    this.seasonFormatted = season;
    let seasonUnf = this.seasonFormatted.replace("-", "");
    this.statsService.getSelectSeasonStats(this.player.id, seasonUnf);
    this.sub = this.statsService.statsUpdated.subscribe((data)=>{
      if(data.length < 1){
        this.noStats = true;
        this.seasonFormatted = season;
      } else if (data.length >= 1){
        this.noStats = false;
      this.seasonFormatted = season;
      this.currentYearStats = data[0].stat;
      }
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

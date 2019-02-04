import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { HeaderComponent } from './header/header.component';
import { PlayerPopupComponent } from './player-popup/player-popup.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { CurrentSeasonStatsComponent } from './current-season-stats/current-season-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersListComponent,
    HeaderComponent,
    PlayerPopupComponent,
    PlayerDetailComponent,
    CurrentSeasonStatsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents: [PlayerPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

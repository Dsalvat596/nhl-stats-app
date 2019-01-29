import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PlayerPopupComponent } from './player-popup/player-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersListComponent,
    HeaderComponent,
    PlayerPopupComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

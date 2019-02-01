import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { HeaderComponent } from './header/header.component';
import { PlayerPopupComponent } from './player-popup/player-popup.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersListComponent,
    HeaderComponent,
    PlayerPopupComponent,
    PlayerDetailComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [PlayerPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

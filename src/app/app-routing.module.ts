import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: HomeComponent, children: [
    { path: ':id/roster', component: PlayersListComponent },
  ]},
  { path: 'player/details/:playerId', component: PlayerDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

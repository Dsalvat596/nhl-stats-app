import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { PlayersListComponent } from './players-list/players-list.component';

const appRoutes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: HomeComponent, children: [
    { path: ':id', component: PlayersListComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

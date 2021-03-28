import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RankingComponent } from './ranking/ranking.component';
import { PlayersStatisticsComponent } from './players-statistics/players-statistics.component'
import { PenaltiesStatisticsComponent } from './penalties-statistics/penalties-statistics.component'
import { GamesComponent } from './games/games.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidebarComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GamesComponent,
    RankingComponent,
    PlayersStatisticsComponent,
    PenaltiesStatisticsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent, pathMatch: 'full'
      },
      { path: 'games', component: GamesComponent },
      { path: 'ranking', component: RankingComponent },
      { path: 'players', component: PlayersStatisticsComponent },
      { path: 'penalties', component: PenaltiesStatisticsComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

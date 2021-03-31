import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RankingViewModel } from '../models/ranking.view.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  public getRanking(): Observable<RankingViewModel> {
    let rankingApiUrl = "/footballtournament/ranking";
    return this.http
      .get<RankingViewModel>(rankingApiUrl);
    }    
}

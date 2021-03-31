import { Component, OnInit } from '@angular/core';
import { RankingViewModel } from '../../models/ranking.view.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  public viewModel: RankingViewModel;

  constructor(public appService: AppService) { }

  public ngOnInit(): void {

    this.appService
      .getRanking()
      .subscribe((rankingModel: RankingViewModel) => {
          this.viewModel = rankingModel;
      })
  }

}

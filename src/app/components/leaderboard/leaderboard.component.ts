import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class LeaderboardComponent implements OnInit {

  scores = [];
  mark = 0;
  name = "";

  constructor(private scoreService: ScoreService ) { }

  ngOnInit() {
    this.loadScoreToTable();
  }

  loadScoreToTable() {
    this.scores = this.scoreService.getScores();
  }

  addItem() {
    this.scoreService.putScore({
      mark: this.mark,
      name: this.name
    });
    this.mark = 0;
    this.name = "";
    this.loadScoreToTable();
  }

}

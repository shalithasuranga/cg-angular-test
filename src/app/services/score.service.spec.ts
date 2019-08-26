import { TestBed } from '@angular/core/testing';

import { ScoreService } from './score.service';

describe('ScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoreService = TestBed.get(ScoreService);
    expect(service).toBeTruthy();
  });

  it('should be able to add score item', () => {
    const service: ScoreService = TestBed.get(ScoreService);
    let item = {
      mark: 100,
      name: "Test"
    };
    service.putScore(item);
    let scores = service.getScores();
    expect(scores[0].mark).toEqual(item.mark);
    expect(scores[0].name).toEqual(item.name);
  });

  it('leaderboard should be sorted by marks descending', () => {
    const service: ScoreService = TestBed.get(ScoreService);
    let item = {
      mark: 60,
      name: "Test"
    };
    service.putScore(item);
    let item2 = {
      mark: 100,
      name: "Test2"
    };
    service.putScore(item2);
    let scores = service.getScores();
    expect(scores[0].mark).toEqual(item2.mark);;
  });

});

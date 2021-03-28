import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltiesStatisticsComponent } from './penalties-statistics.component';

describe('PenaltiesStatisticsComponent', () => {
  let component: PenaltiesStatisticsComponent;
  let fixture: ComponentFixture<PenaltiesStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltiesStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltiesStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

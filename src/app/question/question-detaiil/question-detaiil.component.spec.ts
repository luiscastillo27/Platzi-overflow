import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetaiilComponent } from './question-detaiil.component';

describe('QuestionDetaiilComponent', () => {
  let component: QuestionDetaiilComponent;
  let fixture: ComponentFixture<QuestionDetaiilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDetaiilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetaiilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

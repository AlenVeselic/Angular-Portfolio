import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithTextBorderComponent } from './box-with-text-border.component';

describe('BoxWithTextBorderComponent', () => {
  let component: BoxWithTextBorderComponent;
  let fixture: ComponentFixture<BoxWithTextBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxWithTextBorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithTextBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvZoneComponent } from './cv-zone.component';

describe('CvZoneComponent', () => {
  let component: CvZoneComponent;
  let fixture: ComponentFixture<CvZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

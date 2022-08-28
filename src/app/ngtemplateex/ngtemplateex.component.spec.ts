import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateexComponent } from './ngtemplateex.component';

describe('NgtemplateexComponent', () => {
  let component: NgtemplateexComponent;
  let fixture: ComponentFixture<NgtemplateexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtemplateexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplateexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

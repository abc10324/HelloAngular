import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRTstationComponent } from './mrtstation.component';

describe('MRTstationComponent', () => {
  let component: MRTstationComponent;
  let fixture: ComponentFixture<MRTstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRTstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRTstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

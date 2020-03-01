import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccessingComponent } from './form-accessing.component';

describe('FormAccessingComponent', () => {
  let component: FormAccessingComponent;
  let fixture: ComponentFixture<FormAccessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

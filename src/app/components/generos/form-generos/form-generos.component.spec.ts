import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenerosComponent } from './form-generos.component';

describe('FormGenerosComponent', () => {
  let component: FormGenerosComponent;
  let fixture: ComponentFixture<FormGenerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGenerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

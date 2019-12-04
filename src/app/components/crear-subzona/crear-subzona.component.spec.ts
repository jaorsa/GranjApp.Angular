import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSubzonaComponent } from './crear-subzona.component';

describe('CrearSubzonaComponent', () => {
  let component: CrearSubzonaComponent;
  let fixture: ComponentFixture<CrearSubzonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSubzonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSubzonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

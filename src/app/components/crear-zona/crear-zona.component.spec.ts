import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearZonaComponent } from './crear-zona.component';

describe('CrearZonaComponent', () => {
  let component: CrearZonaComponent;
  let fixture: ComponentFixture<CrearZonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearZonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

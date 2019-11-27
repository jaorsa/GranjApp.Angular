import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPageComponent } from './catalogo-page.component';

describe('CatalogoPageComponent', () => {
  let component: CatalogoPageComponent;
  let fixture: ComponentFixture<CatalogoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

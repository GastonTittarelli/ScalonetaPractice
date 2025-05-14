import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresViewsComponent } from './jugadores-views.component';

describe('JugadoresViewsComponent', () => {
  let component: JugadoresViewsComponent;
  let fixture: ComponentFixture<JugadoresViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

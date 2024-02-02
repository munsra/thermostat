import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatCustomComponent } from './thermostat-custom.component';

describe('ThermostatCustomComponent', () => {
  let component: ThermostatCustomComponent;
  let fixture: ComponentFixture<ThermostatCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThermostatCustomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThermostatCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

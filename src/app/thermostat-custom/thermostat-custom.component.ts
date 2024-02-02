import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermostat-custom',
  templateUrl: './thermostat-custom.component.html',
  styleUrl: './thermostat-custom.component.css'
})
export class ThermostatCustomComponent implements OnInit {
    @Input() min: number = -15;
    @Input() max: number = 40;
    @Input() value: number = 22; // Valore iniziale dello slider
  
    get targetAngle() {
      // Converte il valore dello slider in un angolo
      return 225 + (this.value / this.max) * 270;
    }
  
    constructor() {}
  
    ngOnInit() {
      if (this.value > this.max) {
        this.value = this.max;
      }
      if (this.value < this.min) {
        this.value = this.min;
      }
      if (this.min < 0) {
        this.min = 0;
      }
    }
}

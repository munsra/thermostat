import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css'
})
export class ThermostatComponent implements OnInit{
  @Input() minValue = 0;
  @Input() maxValue = 30;
  @Input() targetValue = 150;
  @Input() interval = 5;
  viewBox: string = '0 0 200 200';

  ngOnInit(): void {
    if(this.targetValue > this.maxValue){
      this.targetValue = this.maxValue;
    }
  }

}

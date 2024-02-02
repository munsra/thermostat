import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { ThermostatComponent } from './thermostat/thermostat.component';
import { ThermostatCustomComponent } from './thermostat-custom/thermostat-custom.component';


@NgModule({
  declarations: [
    AppComponent,
    ThermostatComponent,
    ThermostatCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxRadialGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

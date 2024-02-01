import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { ThermostatComponent } from './thermostat/thermostat.component';


@NgModule({
  declarations: [
    AppComponent,
    ThermostatComponent
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

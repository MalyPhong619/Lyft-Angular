import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

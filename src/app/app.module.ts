import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';
import { LogInComponent } from './log-in/log-in.component';
import { ApplyDriveComponent } from './apply-drive/apply-drive.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    RiderComponent,
    LogInComponent,
    ApplyDriveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

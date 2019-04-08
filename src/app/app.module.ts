import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DriverComponent } from './driver/driver.component';
import { RiderComponent } from './rider/rider.component';
import { LogInComponent } from './log-in/log-in.component';
import { ApplyDriveComponent } from './apply-drive/apply-drive.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { MainWelcomeComponent } from './main-welcome/main-welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    RiderComponent,
    LogInComponent,
    ApplyDriveComponent,
    FooterNavComponent,
    MainWelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

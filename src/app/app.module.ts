import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RentingHomepageComponent } from './components/renting/homepage/homepage.component';
import { ModalComponent } from './components/homepage/notifications/modal/modal.component';
import { NotificationsComponent } from './components/homepage/notifications/notifications.component';
import { VerificationComponent } from './components/profile/verification/verification.component';
import { VerifiedComponent } from './components/verified/verified.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RentingProfileComponent } from './components/renting/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RentingHomepageComponent,
    NotificationsComponent,
    ModalComponent,
    VerificationComponent,
    VerifiedComponent,
    ProfileComponent,
    RentingProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

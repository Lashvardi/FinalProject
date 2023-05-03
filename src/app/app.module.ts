import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingLeftComponent } from './components/landing-left/landing-left.component';
import { LandingRightComponent } from './components/landing-right/landing-right.component';
import { CarsCardComponent } from './components/cars-card/cars-card.component';
import {SwiperModule} from 'swiper/angular';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LandingComponent,
    LandingLeftComponent,
    LandingRightComponent,
    CarsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

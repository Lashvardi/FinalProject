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
import { AddCarPageComponent } from './components/add-car-page/add-car-page.component';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './components/car-list/car-list.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisteredSuccesfulyComponent } from './components/registered-succesfuly/registered-succesfuly.component';
import { LoginComponent } from './components/login/login.component';
import { FilteredComponent } from './components/filtered/filtered.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopularCarsComponent } from './components/popular-cars/popular-cars.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChooseRegisterTypeComponent } from './components/choose-register-type/choose-register-type.component';
import { BusinnesAuthComponent } from './components/businnes-auth/businnes-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LandingComponent,
    LandingLeftComponent,
    LandingRightComponent,
    CarsCardComponent,
    AddCarPageComponent,
    CarListComponent,
    AuthPageComponent,
    RegisteredSuccesfulyComponent,
    LoginComponent,
    FilteredComponent,
    PopularCarsComponent,
    FooterComponent,
    ChooseRegisterTypeComponent,
    BusinnesAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

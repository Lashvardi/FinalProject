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
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
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
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FavoriteCarsComponent } from './components/favorite-cars/favorite-cars.component';
import { CarRentDetailComponent } from './components/car-rent-detail/car-rent-detail.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './components/map/map.component';
import { MapInfoBoxComponent } from './components/map-info-box/map-info-box.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationBoxComponent } from './components/notification-box/notification-box.component';
import { RentedCarsComponent } from './components/rented-cars/rented-cars.component';
import { TakenCarsComponent } from './components/taken-cars/taken-cars.component';
import { ThankyouRentingComponent } from './components/thankyou-renting/thankyou-renting.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';

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
    UserProfileComponent,
    FavoriteCarsComponent,
    CarRentDetailComponent,
    AddCarComponent,
    CustomDropdownComponent,
    MapComponent,
    MapInfoBoxComponent,
    MessagesComponent,
    NotificationBoxComponent,
    RentedCarsComponent,
    TakenCarsComponent,
    ThankyouRentingComponent,
    CarsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibGFzaHZhcmRpIiwiYSI6ImNsZmd6MnlmNjBvYzQzcW5wdnVxY2IyMnQifQ.GMGF_9WLQhrpSfGnJ-W_LQ',
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

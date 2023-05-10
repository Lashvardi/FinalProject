import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddCarPageComponent } from './components/add-car-page/add-car-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { RegisteredSuccesfulyComponent } from './components/registered-succesfuly/registered-succesfuly.component';
import { LoginComponent } from './components/login/login.component';
import { FilteredComponent } from './components/filtered/filtered.component';
import { ChooseRegisterTypeComponent } from './components/choose-register-type/choose-register-type.component';
import { BusinnesAuthComponent } from './components/businnes-auth/businnes-auth.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CarRentDetailComponent } from './components/car-rent-detail/car-rent-detail.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addUser',
    component: AddCarPageComponent,
  },
  {
    path: 'CarAdd',
    component: AddCarComponent,
  },
  {
    path: 'Authorization',
    component: ChooseRegisterTypeComponent,
  },
  {
    path: 'AuthorizationUser',
    component: AuthPageComponent,
  },
  {
    path: 'AuthorizationBusiness',
    component: BusinnesAuthComponent,
  },
  {
    path: 'cars/:id',
    component: CarRentDetailComponent,
  },
  {
    path: 'Profile',
    component: UserProfileComponent,
  },
  {
    path: 'Registered',
    component: RegisteredSuccesfulyComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Filter',
    component: FilteredComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

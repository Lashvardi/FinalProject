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

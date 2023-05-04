import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddCarPageComponent } from './components/add-car-page/add-car-page.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { RegisteredSuccesfulyComponent } from './components/registered-succesfuly/registered-succesfuly.component';

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
    component: AuthPageComponent,
  },
  {
    path: 'Registered',
    component: RegisteredSuccesfulyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

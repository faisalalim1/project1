import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoComponent } from './todo/todo.component';
import { ToogleElementComponent } from './toogle-element/toogle-element.component';
import { UserFaisalComponent } from './user-faisal/user-faisal.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "basic-form",
    component: BasicFormComponent
  },
  {
    path:"toogle",
    component:ToogleElementComponent
  },
  {
    path:"todo",
    component: TodoComponent
  },
  {
    path:"reactiveForm",
    component:ReactiveFormComponent
  },
  {
    path: "userFaisal",
    component: UserFaisalComponent
  },
  {
    path: "getData",
    component: GetDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

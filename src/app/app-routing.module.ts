import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

import { AboutComponent } from './about/about.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { ToogleElementComponent } from './toogle-element/toogle-element.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { UserFaisalComponent } from './user-faisal/user-faisal.component';

const routes: Routes = [
  {
    path: "", redirectTo:'login', pathMatch:'full'

  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
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
  },
  {
    path: "twoWayBinding",
    component: TwoWayBindingComponent
  },
  {
    path: "post-data",
    component: PostDataComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

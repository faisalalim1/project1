import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< Updated upstream
=======
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import{FormsModule} from '@angular/forms';
import { ToogleElementComponent } from './toogle-element/toogle-element.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import{ReactiveFormsModule} from '@angular/forms';
import { UserFaisalComponent } from './user-faisal/user-faisal.component';
import { GetDataComponent } from './get-data/get-data.component';
import{HttpClientModule} from '@angular/common/http';
import { RedElDirective } from './red-el.directive';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PostDataComponent } from './post-data/post-data.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component'


>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< Updated upstream
    FooterComponent
=======
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    BasicFormComponent,
    ToogleElementComponent,
    TodoComponent,
    ReactiveFormComponent,
    UserFaisalComponent,
    GetDataComponent,
    RedElDirective,
    TwoWayBindingComponent,
    PostDataComponent,
    SignupComponent,
    LogoutComponent,

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

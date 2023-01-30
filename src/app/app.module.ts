import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import{FormsModule} from '@angular/forms';
import { ToogleElementComponent } from './toogle-element/toogle-element.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import{ReactiveFormsModule} from '@angular/forms';
import { UserFaisalComponent } from './user-faisal/user-faisal.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    BasicFormComponent,
    ToogleElementComponent,
    TodoComponent,
    ReactiveFormComponent,
    UserFaisalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

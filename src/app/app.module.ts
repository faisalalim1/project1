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
import { UserFaisalComponent } from './user-faisal/user-faisal.component';
import { GetDataComponent } from './get-data/get-data.component';
import{HttpClientModule} from '@angular/common/http';
import { RedElDirective } from './red-el.directive';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PostDataComponent } from './post-data/post-data.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



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
    GetDataComponent,
    RedElDirective,
    TwoWayBindingComponent,
    PostDataComponent,
    SignupComponent,
    LogoutComponent,
    CrudOperationComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
 

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './Library/library/library.component';
import { BookComponent } from './Library/book/book.component';
import { ReservationComponent } from './Details/reservation/reservation.component';
import { AboutComponent } from './Details/about/about.component';
import { DiscussionComponent } from './Details/discussion/discussion.component';
import { DetailsComponent } from './Details/details/details.component';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login/login.component';
import { HeaderComponent } from './Header/header/header.component';
import { EventComponent } from './Events/event/event.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/home/home.component';
import { SigninComponent } from './SignIn/signin/signin.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BookComponent,
    DetailsComponent,
    ReservationComponent,
    AboutComponent,
    DiscussionComponent,
    DetailsComponent,
    LoginComponent,
    HeaderComponent,
    EventComponent,
    HomeComponent,
    SigninComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

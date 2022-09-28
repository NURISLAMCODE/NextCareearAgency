import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
import { ContainerComponent } from './container/container.component';
// import { LoginGuard } from './auth/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PricesComponent,
    ProjectsComponent,
    PagesComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MeetTheTeamComponent,
    TestimonialComponent,
    NavbarComponent,
    CoursesComponent,
    TestComponent,
    ResultComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

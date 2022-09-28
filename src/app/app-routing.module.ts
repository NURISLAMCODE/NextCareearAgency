import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectsComponent } from './projects/projects.component';
import { PricesComponent } from './prices/prices.component';
import { PagesComponent } from './pages/pages.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
import { ContainerComponent } from './container/container.component';
// import { LoginGuard } from './auth/login.guard';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'about', component: AboutComponent },
  {path: 'contact', component:ContactComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'home', component: HomeComponent, /*canActivate:[LoginGuard]*/ },
  {path: 'header', component: HeaderComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'navbar', component: NavbarComponent},
  {path: 'projects', component: ProjectsComponent },
  {path: 'prices', component: PricesComponent },
  {path: 'page', component: PagesComponent },
  {path: 'meetTeam', component: MeetTheTeamComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'testimonial', component: TestimonialComponent },
  {path: 'courses', component: CoursesComponent},
  {path: 'test', component: TestComponent },
  {path: 'result', component: ResultComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'container', component: ContainerComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { FooterComponent } from './footer/footer.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainButtonComponent,
    FooterComponent,
    CguComponent,
    ActivitesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

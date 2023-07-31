import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeTitleComponent } from './components/welcome-title/welcome-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginCardComponent,
    WelcomeTitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

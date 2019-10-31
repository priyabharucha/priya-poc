import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutUsService } from './service/about-us.service';
import { OrderByDatePipe } from './pipe/order-by.pipe';
import { CalculateAgePipe } from './pipe/calculate-age.pipe';
import { LandingSectionComponent } from './component/landing-section/landing-section.component';

import { RouterOutletDirective } from './directive/router-outlet.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowItWorksComponent,
    HeaderComponent,
    OrderByDatePipe,
    CalculateAgePipe,
    LandingSectionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AboutUsService,
    RouterOutletDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

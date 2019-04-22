import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HelpComponent } from './component/help/help.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutUsService } from './service/about-us.service';
import { OrderByDatePipe } from './pipe/order-by.pipe';
import { CalculateAgePipe } from './pipe/calculate-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HelpComponent,
    HeaderComponent,
    OrderByDatePipe,
    CalculateAgePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AboutUsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

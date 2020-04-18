import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './create/create.component';
import { ByDateComponent } from './by-date/by-date.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { DailyComponent } from './home/daily/daily.component';
import { TotalComponent } from './home/total/total.component';
import { CaseComponent } from './case/case.component';
import { CaseComponent as HomeCase } from './home/daily/case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateComponent,
    ByDateComponent,
    HomeHeaderComponent,
    DailyComponent,
    TotalComponent,
    CaseComponent,
    HomeCase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

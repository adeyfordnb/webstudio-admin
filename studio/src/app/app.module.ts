import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { MainLayoutComponent } from './shared/mainlayouts/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from "@angular/router";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainLayoutComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FontAwesomeModule,
    SlickCarouselModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

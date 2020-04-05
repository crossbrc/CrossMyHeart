import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutbgComponent } from './aboutbg/aboutbg.component';
import { AboutbpComponent } from './aboutbp/aboutbp.component';
import { SongreqComponent } from './songreq/songreq.component';
import { FaqComponent } from './faq/faq.component';
import { DancingComponent } from './dancing/dancing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistryComponent,
    AboutbgComponent,
    AboutbpComponent,
    SongreqComponent,
    FaqComponent,
    DancingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutbgComponent } from './aboutbg/aboutbg.component';
import { AboutbpComponent } from './aboutbp/aboutbp.component';
import { DancingComponent } from './dancing/dancing.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { RegistryComponent } from './registry/registry.component';
import { SongreqComponent } from './songreq/songreq.component';


const routes: Routes = [
  { path: 'aboutbg', component: AboutbgComponent },
  { path: 'aboutbp', component: AboutbpComponent },
  { path: 'dancing', component: DancingComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', component: HomeComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'songreq', component: SongreqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

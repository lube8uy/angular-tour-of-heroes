import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { HeroDetailComponent }   from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './services/hero.service';
import { HeroSearchService } from './services/hero-search.service';


@NgModule({
  imports:      [ 
  	BrowserModule, 
  	FormsModule, 
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
  	AppComponent, 
  	HeroesComponent, 
  	HeroDetailComponent,
  	DashboardComponent,
    HeroSearchComponent 
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
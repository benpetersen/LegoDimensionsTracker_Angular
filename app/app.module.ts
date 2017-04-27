import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import {PacksComponent, PackComponent} from './pack/index';
import {AllPacksComponent} from './allPacks/index';
import {AbilityService, PackService} from './services/index';
import {AbilitySearchComponent} from './abilitySearch/index';
import {PageNotFoundComponent} from './not-found.component';
import {CharacterComponent} from './character/index';
import {SearchBox} from './common/index';
import {SearchPipe, SearchPackNamePipe, SearchAbilityNamePipe} from './pipes/index';

let schemas: any[] = [CUSTOM_ELEMENTS_SCHEMA];

const appRoutes: Routes = [
  { path: 'ability-search', component: AbilitySearchComponent },
  { path: 'all-packs', component: AllPacksComponent, data: { title: 'Pack List' }},
  { path: 'packs', component: PacksComponent, data: { title: 'Pack List' }},
  { path: '', redirectTo: '/packs', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PackComponent,
    PacksComponent,
    AllPacksComponent,
    CharacterComponent,
    AbilitySearchComponent,
    PageNotFoundComponent,
    SearchBox,
    SearchPipe,
    SearchPackNamePipe,
    SearchAbilityNamePipe
  ],
  providers: [ CookieService],
  bootstrap:  [ AppComponent ],
  schemas: schemas,
})
export class AppModule { }

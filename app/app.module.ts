import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, Response } from '@angular/http';

import { AppComponent } from './app.component';
// import {CustomerComponent} from './pack/pack.component';
// import {CustomersComponent} from './pack/packs.component';

import {PacksComponent, PackComponent, CharacterComponent, SearchPipe, SearchBox} from './pack/index';

let directives: any[] = [
  AppComponent,
  PackComponent,
  PacksComponent,
  CharacterComponent,
  SearchPipe,
  SearchBox
];

let schemas: any[] = [];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: directives,
  bootstrap:  [ AppComponent ],
  schemas: schemas,
})
export class AppModule { }

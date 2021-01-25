import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

const APP_CORE_UI_MODULES = [
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...APP_CORE_UI_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { UserInputModule } from './user-input/user-input-module';

@NgModule({
  declarations: [App, Header],
  bootstrap: [App],
  imports: [BrowserModule,CommonModule,NgOptimizedImage,UserInputModule],
})
export class AppModule { }


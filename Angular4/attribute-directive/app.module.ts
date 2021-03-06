/* Copyright (C) 2017 Centroida & ITCE - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the Prometheus courses license.
 *
 * You should have received a copy of the Prometheus courses
 * license.If not, please write to:
 * or to prometheus@itce.com
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HighlightDirective} from './highlight.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
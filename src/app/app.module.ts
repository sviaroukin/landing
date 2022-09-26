import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { ScrollSectionDirective } from 'src/directives/scroll/scroll-section.directive';
import { ScrollAnchorDirective } from 'src/directives/scroll/scroll-anchor.directive';
import { ScrollManagerDirective } from 'src/directives/scroll/scroll-manager.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionOneComponent } from 'src/sections/section-one/one.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
    SectionOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

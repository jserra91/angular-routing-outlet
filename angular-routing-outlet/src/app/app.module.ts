import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListComp1Component } from './listComp1/listComp1.component';
import { ListDefaultComponent } from './listDefault/listDefault.component';
import { ListComp2Component } from './listComp2/listComp2.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
    CommonModule
  ],
  declarations: [					
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
    ListComponent,
    ListComp1Component,
    ListDefaultComponent,
    ListComp2Component,
      ConfigComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}

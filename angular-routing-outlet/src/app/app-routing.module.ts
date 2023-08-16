import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { authGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { ListComponent } from './list/list.component';
import { ListDefaultComponent } from './listDefault/listDefault.component';
import { ListComp1Component } from './listComp1/listComp1.component';
import { ListComp2Component } from './listComp2/listComp2.component';
import { ConfigComponent } from './config/config.component';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canMatch: [authGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: { preload: true }
  },
  {
    path: '',
    children: [
      {
        path: 'config',
        component: ConfigComponent,
        children: [
          {
            path: '',
            component: ListDefaultComponent,
            outlet: 'list',
          },
          {
            path: 'listComp1',
            component: ListComp1Component,
            outlet: 'list',
          },
          {
            path: 'listComp2',
            component: ListComp2Component,
            outlet: 'list'
          }
        ]
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

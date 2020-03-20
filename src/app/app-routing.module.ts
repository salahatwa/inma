import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/components/error.component';
import { AboutComponent } from './shared/components/about.component';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { LayoutComponent } from './main/layout.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DashboardModule } from './main/dashboard/dashboard.module';
import { AppLayoutModule } from './main/app-layout.module';
import { ProfileComponent } from './main/profile/profile.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      // { path: 'login', redirectTo: 'login', pathMatch: 'full' },
      {  path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full' ,
      data: {title: 'dashboard.title'}},
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
          path: '',
          component:DashboardComponent,
          loadChildren: () => AppLayoutModule ,
          data: {title: 'dashboard.title'}
        },
        {
          path: 'profile',
          component:ProfileComponent,
          loadChildren: () => AppLayoutModule ,
          data: {title: 'profile.title'}
        }
      ]
      },
      { path: '404', component: ErrorComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: ErrorComponent, pathMatch: 'full' }
    ], { useHash: false })
  ],
  declarations: [
    ErrorComponent,
    AboutComponent
  ],
  providers: [AuthGuard],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

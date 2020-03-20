import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    LoginModule,
    DashboardModule,
    ProfileModule
  ]
})
export class MainModule { }

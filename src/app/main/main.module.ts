import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderSearchModule } from './order-search/order-search.module';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    LoginModule,
    DashboardModule,
    OrderSearchModule
  ]
})
export class MainModule { }

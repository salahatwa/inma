import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSearchComponent } from './order-search.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AuthModule } from 'src/app/shared/services/auth/auth.module';



@NgModule({
  declarations: [OrderSearchComponent],
  imports: [
    SharedModule,
    AuthModule,
    CommonModule
  ]
})
export class OrderSearchModule { }

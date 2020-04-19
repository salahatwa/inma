import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AuthModule } from 'src/app/shared/services/auth/auth.module';
import { EnterOrderComponent } from './enter-order/enter-order.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { CommissionDetailComponent } from './commission-detail/commission-detail.component';
import { PortfolioSearchComponent } from './portfolio-search/portfolio-search.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioStockDetailComponent } from './portfolio-stock-detail/portfolio-stock-detail.component';
import { ExistingOrderComponent } from './existing-order/existing-order.component';
import { ConfirmOrderDialogComponent } from './enter-order/confirm-order-dialog/confirm-order-dialog.component';

@NgModule({
  declarations: [DashboardComponent, EnterOrderComponent, StockDetailComponent, 
    CommissionDetailComponent, PortfolioSearchComponent, PortfolioDetailComponent,
     PortfolioStockDetailComponent, ExistingOrderComponent, ConfirmOrderDialogComponent],
  imports: [
    SharedModule,
    AuthModule,
    DashboardRoutingModule
  ],
  providers: [],
 
})
export class DashboardModule { }

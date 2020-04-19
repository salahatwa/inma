import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../../modules/shared.module';
import { MatrialModule } from '../../modules/matrial.module';
import { TranslateModule } from '@ngx-translate/core';
import { IconsModule } from '../../modules/icons.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatrialModule,
    TranslateModule,
    IconsModule
    // SharedModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }

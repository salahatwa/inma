import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../services/utils.service';
import { MatrialModule } from './matrial.module';
import { ApiService } from '../services/api.service';
import { NavbarModule } from '../components/navbar/navbar.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { Title } from '@angular/platform-browser';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { IconsModule } from './icons.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    TranslateModule,
    MatrialModule,
    NavbarModule,
    SidebarModule,
    FooterModule,
  ],
  declarations: [
    
  ],
  providers: [Title,UtilsService,ApiService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    SidebarModule,
    NavbarModule,
    TranslateModule,
    MatrialModule,
    FooterModule
  ]
})
export class SharedModule { }

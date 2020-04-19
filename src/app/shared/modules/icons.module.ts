import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FeatherModule } from 'angular-feather';
import { User,FilePlus,Search,Settings,LogOut,XCircle} from 'angular-feather/icons';
 
// Select some icons (use an object, not an array)
const icons = {
  User,
  FilePlus,Search,Settings,LogOut,XCircle
};
 
@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

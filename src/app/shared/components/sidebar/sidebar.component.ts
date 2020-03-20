import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Config } from '../../classes/config';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}


@Component({
  selector: 'app-inma-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['./sidebar.component.css'],
  providers: []
})
export class SidebarComponent implements OnInit {
   
  sidebar: boolean = true;
  menuItems: RouteInfo[];

  constructor(private utilService:UtilsService)
  {
  }

  async ngOnInit() {
    /**
     * title , readed from langulage by key 
     */
    this.menuItems= [
      { path: '/dashboard', title: 'sidebar.menu.dashboard',  icon: 'dashboard', class: '' },
      { path: '/profile', title:'sidebar.menu.profile',  icon:'person', class: '' },
      // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
      // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
      // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
      // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
      // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
      // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    ];
  }
 
  updatePageTitle(key:string)
  {
    this.utilService.setDocTitle(key,false);
  }

}

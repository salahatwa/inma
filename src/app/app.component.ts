import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Config } from './shared/classes/config';
import { UtilsService } from './shared/services/utils.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

declare const Offline: any;
declare const jQuery: any;
declare const UIkit: any;
declare const ipcRenderer: any;

@Component({
  selector: 'app-inma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor( router: Router,
    private utilService: UtilsService,
    private http: HttpClient,
    private utils: UtilsService,
  ) {
  
    this.utils.loadDefaultSetting();

    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        this.utilService.setDocTitle(title,true);
      }
    });
  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  ngOnInit() {  
  }



}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config } from '../classes/config';

@Component({
  selector: 'app-inma-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  constructor(public app: Config, private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.app.name + ': About');
  }

}

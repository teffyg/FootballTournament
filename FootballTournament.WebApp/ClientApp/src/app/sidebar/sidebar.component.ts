import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //declarar com input y definir nombre
  public isVisible: boolean;

  constructor() { }

  ngOnInit() {
  }
}

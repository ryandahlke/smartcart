import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById("menuDropDown").classList.add("collapsed")
    document.getElementById("navbarSupportedContent").classList.remove("show")
  }

}




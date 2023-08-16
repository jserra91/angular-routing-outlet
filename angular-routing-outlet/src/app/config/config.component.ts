import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    debugger
  }

  gotoListComp1() {
    /** router outlet named list */
    this.router.navigate([{ outlets: { list: ['config', 'listComp1'] } }]);
  }

  gotoListComp2() {
    /** router outlet named list */
    this.router.navigate([{ outlets: { list: ['config', 'listComp2'] } }]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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

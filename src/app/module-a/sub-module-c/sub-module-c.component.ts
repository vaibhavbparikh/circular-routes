import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-module-c',
  templateUrl: './sub-module-c.component.html'
})
export class SubModuleCComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadDetailPage() {
    this.router.navigate(['/action/1']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  private curUrl: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.curUrl = this.router.url;
  }

  loadDetailC() {
    if (this.curUrl.includes('action') && this.curUrl.includes('topic-detail')) {
      this.location.back();
    } else {
      this.router.navigate(['/topic/1/action-detail/1']);
    }
  }
}

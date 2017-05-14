import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailCComponent implements OnInit {

  private curUrl: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.curUrl = this.router.url;
  }


  loadDetailB() {
    if (this.curUrl.includes('topic') && this.curUrl.includes('action-detail')) {
      this.location.back();
    } else {

      this.router.navigate(['/action/1/topic-detail/1']);
    }
  }

}

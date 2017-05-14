import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-module-b',
  templateUrl: './sub-module-b.component.html',
  styleUrls: ['./sub-module-b.component.css']
})
export class SubModuleBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadDetailPage() {
    this.router.navigate(['/topic/1']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html',
  styleUrls: ['./module-a.component.css']
})
export class ModuleAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadModuleB() {
    this.router.navigate(['/topic']);
  }

  loadModuleC() {
    this.router.navigate(['/action']);
  }


}

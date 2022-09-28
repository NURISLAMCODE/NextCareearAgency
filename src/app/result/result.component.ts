import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 
  value = localStorage.getItem("value");
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  valueClear() {
    localStorage.clear();
    this.router.navigateByUrl('/home')

  }

}

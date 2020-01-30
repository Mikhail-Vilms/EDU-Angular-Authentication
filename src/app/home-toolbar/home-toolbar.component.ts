import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.css']
})
export class HomeToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    console.log(" == in onLogout() == ");
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}

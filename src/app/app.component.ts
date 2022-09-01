import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'week4tut';
  valid = sessionStorage.getItem('valid');

  constructor(private router: Router) {}

  async ngOnInit() {

    this.valid =await sessionStorage.getItem('valid');

  }

  logOut(){
    sessionStorage.clear();
    this.router.navigateByUrl('api/auth');

  }

  checkValid(){
    if (sessionStorage.getItem('valid') == 'no' || sessionStorage.getItem('valid') ==null){
      this.router.navigateByUrl('/api/auth');
    } else {
      this.router.navigateByUrl('/profile');
    }
  }
}

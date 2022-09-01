import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username:'',
    password:'',
    email:'',
    age:'',
    birthday:'',
    valid:'no',
  };

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {}

  onSubmit() {

    this.httpClient.post(BACKEND_URL + '/api/auth', this.user).subscribe((data:any)=>{
      if (data.ok = true) {
        this.user.valid = 'yes';
        sessionStorage.setItem('username', this.user.username);
        sessionStorage.setItem('email', this.user.email);
        sessionStorage.setItem('age', this.user.age);
        sessionStorage.setItem('birthday', this.user.birthday);
        sessionStorage.setItem('valid', this.user.valid);
        this.router.navigateByUrl('/account');
      } else {
        alert('Invalid account!');
      }
    });
  }
}

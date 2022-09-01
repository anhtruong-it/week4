import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

username:any;
email:any;
age:any;
birthday:any;
valid:any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.username =await sessionStorage.getItem('username');
    this.email =await sessionStorage.getItem('email');
    this.age =await sessionStorage.getItem('age');
    this.birthday =await sessionStorage.getItem('birthday');
    this.valid =await sessionStorage.getItem('valid');
  }

  async editUsername() {
    await sessionStorage.setItem('username', this.username);
  }

  async editEmail() {
  await  sessionStorage.setItem('email', this.email);
  }

  async editAge() {
  await  sessionStorage.setItem('age', this.age);
  }

  async editBirthday() {
  await  sessionStorage.setItem('birthday', this.birthday);
  }
}

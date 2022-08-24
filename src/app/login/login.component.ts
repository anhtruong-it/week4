import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  pwd='';
  account=false;
  preAccount=[
    {'email':'abc@com.au', 'pwd':'123'},
    {'email':'tony@com.au', 'pwd':'456'},
    {'email':'anh@com.au', 'pwd':'789'},
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    for (let i=0; i<this.preAccount.length; i++){
      if (this.email == this.preAccount[i].email && this.pwd == this.preAccount[i].pwd){
        this.account=true
        break;
      }
    }

    if (this.account == true){
      this.router.navigateByUrl('/account');
    } else {
      alert("Account is invalid!");
    }
  }
}

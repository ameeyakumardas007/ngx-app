import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'customer';
  password: string = 'customer';

  constructor(
    private _customerService: CustomerService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this._customerService.login(this.username, this.password).subscribe(
      data => {
        console.log("login response: ", data);
        localStorage.setItem('token', data.id);
        this._router.navigate(['cutomer-list']);
      },
      error => {
        console.log("error in logging in: ", error);
      }
    );
  }

}

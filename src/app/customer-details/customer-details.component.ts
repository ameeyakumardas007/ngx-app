import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  customer = {
    name: null,
    gender: null,
  };

  constructor() { }

  ngOnInit(): void {
    console.log("Customer Details Component initialized.");
  }

  ngOnDestroy(): void {
    console.log("Customer Details component goes out of scope.");
  }

  onSubmit(): void {
    console.log("customer: ", this.customer);
  }

}

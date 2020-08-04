import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: ICustomer[];

  constructor(
    private _customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(): void {
    this._customerService.list().subscribe(
      data => {
        this.customers = data;
        console.log("data: ", data);
      },
      error => console.log("error in fetching customer list: ", error),
    );
  }

}

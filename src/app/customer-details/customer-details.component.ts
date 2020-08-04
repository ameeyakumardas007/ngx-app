import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { ICustomer } from '../models/customer';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  customerForm: FormGroup;
  customer: ICustomer;
  routeSub: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private _customerService: CustomerService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log("Customer Details Component initialized.");

    // build your form group
    this.customerForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      age: [null, [this.minimumAgeValidator, this.numberValidator, Validators.max(50)]],
    });

    // change of field detection
    this.customerForm.get('name').valueChanges.subscribe(
      value => console.log("name changed to: ", value)
    );

    // look for changes in route
    this.routeSub = this._activatedRoute.params.subscribe(
      params => {
        console.log("params: ", params);
        const id: number = params["id"];
        this.getCustomerById(id);
      }
    );


  }

  ngOnDestroy(): void {
    console.log("Customer Details component goes out of scope.");
    this.routeSub.unsubscribe();
  }

  onSubmit(): void {
    console.log("customer: ", this.customerForm.value);
  }

  minimumAgeValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value < 18) {
      return {
        invalidAge: true,
      };
    } else {
      return null;
    }
  }

  numberValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (isNaN(control.value)) {
      return {
        isNotANumber: true,
      };
    } else {
      return null;
    }
  }

  getCustomerById(id: number): void {
    this._customerService.getById(id).subscribe(
      data => {
        this.customer = data;
        this.customerForm.get('name').setValue(data.name);
        this.customerForm.get('age').setValue(data.age);
      },
      error => console.log("error in fetching customer details: ", error),
    );
  }

}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';

const routes: Routes = [
  { path: '', component: CustomerListComponent},
];

@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [
    CustomerService,
  ],
})
export class CustomerListModule { }

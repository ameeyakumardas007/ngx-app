import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerService } from '../services/customer.service';

const routes: Routes = [
  { path: '', component: CustomerDetailsComponent},
  { path: ':id', component: CustomerDetailsComponent},
];

@NgModule({
  declarations: [
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [
    CustomerService,
  ],
})
export class CustomerDetailsModule { }

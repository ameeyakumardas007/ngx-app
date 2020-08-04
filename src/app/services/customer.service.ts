import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  endPoint = 'http://localhost:3000/api/Customers';

  constructor(
    private _httpClient: HttpClient,
  ) { }

  list(): Observable<ICustomer[]> {
    return this._httpClient.get<ICustomer[]>(this.endPoint);
  }

  getById(id: number): Observable<ICustomer> {
    return this._httpClient.get<ICustomer>(this.endPoint + "/" + id);
  }

}

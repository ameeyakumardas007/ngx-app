import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';
import { ILoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  endPoint = 'http://localhost:3000/api/Customers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'),
    }),
  };

  constructor(
    private _httpClient: HttpClient,
  ) { }

  login(username: string, password: string): Observable<ILoginResponse> {
    return this._httpClient.post<ILoginResponse>('http://localhost:3000/api/Users/login', {username: username, password: password});
  }

  list(): Observable<ICustomer[]> {
    return this._httpClient.get<ICustomer[]>(this.endPoint);
  }

  getById(id: number): Observable<ICustomer> {
    return this._httpClient.get<ICustomer>(this.endPoint + "/" + id);
  }

  create(payload: ICustomer): Observable<ICustomer> {
    return this._httpClient.post<ICustomer>(this.endPoint, payload);
  }

  save(id: number, payload: ICustomer): Observable<ICustomer> {
    return this._httpClient.patch<ICustomer>(this.endPoint + "/" + id, payload);
  }

  deleteById(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.endPoint + "/" + id);
  }


}

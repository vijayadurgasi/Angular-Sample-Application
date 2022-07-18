import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<IEmployee[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}

import { inject, Injectable } from '@angular/core';
import {Firestore,
  collection,
  collectionData,
  addDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore:  Firestore = inject(Firestore);

  getEmployees(): Observable<readonly Employee[]> {
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees, {idField: 'id'}) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee) {
    const employees = collection(this.firestore, 'employees');
    return addDoc(employees, {...employee});
  }
}

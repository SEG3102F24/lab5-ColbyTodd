import {Component, inject} from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';
import {Employee} from "../model/employee";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent {
  private store: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];

  ngOnInit(): void {
    this.store.getEmployees().subscribe(data => {
      this.employees = data.map(e => {
        return {
          ...e
        } as Employee;
      });
    });
    console.log(this.employees)
  }
}

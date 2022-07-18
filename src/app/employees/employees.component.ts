import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { EditEmployeeDialogComponent } from './edit-employee-dialog.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employee.component.sass'],
})
export class EmployeesComponent implements OnInit {
  sub!: Subscription;
  employees: IEmployee[] = [];
  dataSource!: any;
  displayedColumns: string[] = [
    'actions',
    'name',
    'username',
    'email',
    'phone',
    'website',
  ];

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sub = this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.dataSource = employees;
      },
    });
  }

  onEdit(rowData: any) {
    console.log(rowData);
    const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
      width: '450px',
      data: { ...rowData },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}

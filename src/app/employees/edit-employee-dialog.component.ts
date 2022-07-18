import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
})
export class EditEmployeeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Heroe } from '../../../shared/interfaces/general.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {


  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public heroe: Heroe
  ) { }

  deleteHeroe() {
    this.dialogRef.close(true);
  }


  cancel() {
    this.dialogRef.close();
  }
}

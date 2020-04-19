import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmOrderDialogComponent } from './confirm-order-dialog/confirm-order-dialog.component';

@Component({
  selector: 'app-enter-order',
  templateUrl: './enter-order.component.html',
  styleUrls: ['./enter-order.component.scss']
})
export class EnterOrderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmOrderDialogComponent, {
      // width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log( result );
    });
  }
}

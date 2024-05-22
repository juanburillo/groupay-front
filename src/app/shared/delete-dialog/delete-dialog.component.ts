import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() cancelDelete: EventEmitter<any> = new EventEmitter();
  @Output() acceptDelete: EventEmitter<any> = new EventEmitter();

  cancel(): void {
    this.cancelDelete.emit();
  }

  accept(): void {
    this.acceptDelete.emit();
  }
}

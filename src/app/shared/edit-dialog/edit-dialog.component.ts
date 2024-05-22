import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-dialog.component.html',
})
export class EditDialogComponent implements OnInit {
  @Input() initialName: string = '';
  @Output() cancelEdit: EventEmitter<any> = new EventEmitter();
  @Output() acceptEdit: EventEmitter<any> = new EventEmitter();

  newFriendName: string = '';

  ngOnInit(): void {
    this.newFriendName = this.initialName;
  }

  cancel(): void {
    this.cancelEdit.emit();
  }

  accept(): void {
    this.acceptEdit.emit(this.newFriendName);
  }
}

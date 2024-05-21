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

  ngOnInit() {
    this.newFriendName = this.initialName;
  }

  cancel() {
    this.cancelEdit.emit();
  }

  accept() {
    this.acceptEdit.emit(this.newFriendName);
  }
}

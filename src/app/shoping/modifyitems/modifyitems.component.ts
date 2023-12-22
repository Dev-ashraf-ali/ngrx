import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modifyitems',
  templateUrl: './modifyitems.component.html',
  styleUrl: './modifyitems.component.css'
})
export class ModifyitemsComponent {

  @Output() itemIncrement = new EventEmitter<void>()
  @Output() itemDecrement = new EventEmitter<void>()
  @Output() itemReset = new EventEmitter<void>()
  onIncrement(){
    this.itemIncrement.emit()
  }

  onDecrement(){
    this.itemDecrement.emit()
  }

  onReset(){
    this.itemReset.emit()
  }
}

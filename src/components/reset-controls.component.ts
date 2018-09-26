import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-reset-controls',
  templateUrl: 'reset-controls.component.html'
})
export class ResetControlsComponent {

  @Output() didReset = new EventEmitter();

  onReset(type: string) {
    this.didReset.emit(type);
  }
}

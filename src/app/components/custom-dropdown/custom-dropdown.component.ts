import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
  @Input() options: { label: string; value: any }[] = [];
  @Input() placeholder: string = '';
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  selectedValue: any;
  showDropdown: boolean = false


  onValueChange(): void {
    this.valueChange.emit(this.selectedValue);
  }

}

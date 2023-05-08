import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-info-box',
  templateUrl: './map-info-box.component.html',
  styleUrls: ['./map-info-box.component.scss']
})
export class MapInfoBoxComponent {
  @Input() imageSrc: string | null = null;
  @Input() Carbrand: string | null = null;
  @Input() CarModel: string | null = null;
  @Input() distance: string | null = null;
}

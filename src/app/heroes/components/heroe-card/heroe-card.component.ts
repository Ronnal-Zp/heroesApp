import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../../shared/interfaces/general.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent {
 
  @Input() heroe!: Heroe;

}

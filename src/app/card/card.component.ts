import { Component, Input } from '@angular/core';
import { Plan } from '../interfaces/plan.interface';
import {
  IconDefinition,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // Input Decorator to receive card details
  @Input() public plan?: Plan;

  // Font Awesome Icons
  faCheck: IconDefinition = faCheck;
  faTimes: IconDefinition = faTimes;
}

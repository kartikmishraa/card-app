import { Component, Input } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// TODO: Use this interface Plan
interface Plan {
  type: string;
  price: number;
  features: Array<Object>;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public type: string = 'TempTitle';
  @Input() public price: string = '0';
  @Input() public features: any = []; // Also fix this, remove "any"

  // Font Awesome Icons
  faCheck = faCheck;
  faTimes = faTimes;

  // Class values
  textMuted: string = 'text-muted';
  notMuted: string = '';

  // Function to parse string to boolean
  getBool = (str: string) => {
    return JSON.parse(str);
  };
}

import { Component } from '@angular/core';
import StaticData from '../../assets/data.json';
import { Plan } from './interfaces/plan.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* Storing the Static Data */
  cardDetails: Plan[] = StaticData;

  /* Util Function */
  public sayHeyJude = (): void => {
    console.log('hey jude');
    console.log(this.cardDetails);
  };
}

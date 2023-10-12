import { Component } from '@angular/core';
import * as StaticData from '../../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Static Data stored in cardDetails
  // cardDetails = JSON.parse(StaticData);
  cardDetails = [
    {
      type: 'FREE',
      price: '0',
      features: [
        { name: 'Single User', included: 'true' },
        { name: '5GB Storage', included: 'true' },
        { name: 'Unlimited Public Projects', included: 'true' },
        { name: 'Community Access', included: 'true' },
        { name: 'Unlimited Private Projects', included: 'false' },
        { name: 'Dedicated Phone Support', included: 'false' },
        { name: 'Free Subdomain', included: 'false' },
        { name: 'Monthly Status Reports', included: 'false' },
      ],
    },
    {
      type: 'PLUS',
      price: '9',
      features: [
        { name: '5 Users', included: 'true' },
        { name: '50GB Storage', included: 'true' },
        { name: 'Unlimited Public Projects', included: 'true' },
        { name: 'Community Access', included: 'true' },
        { name: 'Unlimited Private Projects', included: 'true' },
        { name: 'Dedicated Phone Support', included: 'true' },
        { name: 'Free Subdomain', included: 'true' },
        { name: 'Monthly Status Reports', included: 'false' },
      ],
    },
    {
      type: 'PRO',
      price: '49',
      features: [
        { name: 'Unlimited Users', included: 'true' },
        { name: '150GB Storage', included: 'true' },
        { name: 'Unlimited Public Projects', included: 'true' },
        { name: 'Community Access', included: 'true' },
        { name: 'Unlimited Private Projects', included: 'true' },
        { name: 'Dedicated Phone Support', included: 'true' },
        { name: 'Unlimited Free Subdomain', included: 'true' },
        { name: 'Monthly Status Reports', included: 'true' },
      ],
    },
  ];

  // Util fn
  public sayHeyJude = () => {
    console.log('hey jude');
  };
}

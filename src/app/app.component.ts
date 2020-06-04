import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CreditCalculator';
  carPrice = 1970000;
  minDeposit = 197000;
  carPrices = [1970000, 2370000, 3670000, 1970000, 2370000, 3670000];
  outputPrice(price) {
    console.log(price);
    this.carPrice = price;
    this.minDeposit = price * .1;
  }
}

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
  minPayment = 10000;
  maxPayment = 50000;
  period = 60;
  carPrices = [1970000, 2370000, 3670000, 1970000, 2370000, 3670000];
  paymentPerMounth = null;
  outputPrice(price) {
    console.log(price);
    this.carPrice = price;
    this.minDeposit = price * .1;
  };
  calcCredit(carPrice, deposit, period) {
    this.paymentPerMounth = (((((carPrice - deposit) / (period / 12)) * 1.118)) / 12).toFixed(0);
  }
}

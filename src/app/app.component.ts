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
  defaultPayment = 20000;
  maxPayment = 35000;
  period = 120;
  maxPeriod = 240;
  pseudoMaxPeriod = 360;
  carPrices = [1970000, 2370000, 3670000, 1970000, 2370000, 3670000];
  paymentPerMounth = null;
  // newPayment = 10000;
  outputPrice(price) {
    console.log(price);
    this.carPrice = price;
    this.minDeposit = price * .1;
  };
  calcCredit(carPrice, deposit, period) {
    this.paymentPerMounth = (((((carPrice - deposit) / (period / 12)) * 1.118)) / 12).toFixed(0);
  }
  // calcNewPayment(valuePayment, valuePeriod) {
  //   this.newPayment = valuePayment + (((this.pseudoMaxPeriod - valuePeriod) / 12) * 1000);
  // }
}

import { Component } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  interestRate = .118;
  outputPrice(price) {
    this.carPrice = price;
    this.minDeposit = price * .1;
  };
  calcCredit(carPrice, deposit, period) {
    this.paymentPerMounth = (((((carPrice - deposit) / (period / 12)) * 1.118)) / 12).toFixed(0);
  }
  // calcNewPayment(valuePayment, valuePeriod) {
  //   this.newPayment = valuePayment + (((this.pseudoMaxPeriod - valuePeriod) / 12) * 1000);
  // }

  constructor(private modalService: NgbModal) {}

  openCallbackForm(content, sendCarPrice, sendDeposit, sendPayment, sendPeriod, sendPaymentPerMounth) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log('Стоимость автомобиля: ' + sendCarPrice + ' ₽');
    console.log('Первоначальный взнос: ' + sendDeposit + ' ₽');
    console.log('Желаемый ежемесячный платеж: ' + sendPayment + ' ₽/мес');
    console.log('Срок кредита: ' + sendPeriod + ' мес');
    console.log('Процентная ставка: ' + (this.interestRate * 100).toFixed(1) + '%');
    console.log('Eжемесячный платеж: ' + sendPaymentPerMounth + ' ₽/мес');
    console.log('Сумма переплат: ' + ((this.paymentPerMounth * sendPeriod) - (this.carPrice - sendDeposit)) + ' ₽');
  }
  // openCreditForm(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  // }
}

import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export class Car {
  constructor(public image: string,
              public quantity: number,
              public model: string, 
              public price: number)
  { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  image: string;
  quantity: number;
  model: string;
  price: number;

  car1 = new Car('/assets/images/bmw-1.png', 9, '3 серии', 1970000);
  car2 = new Car('/assets/images/bmw-2.png', 6, '5 серии', 2370000);
  car3 = new Car('/assets/images/bmw-3.png', 3, '7 серии', 3670000);
  car4 = new Car('/assets/images/bmw-1.png', 9, '3 серии', 1970000);
  car5 = new Car('/assets/images/bmw-2.png', 6, '5 серии', 2370000);
  car6 = new Car('/assets/images/bmw-3.png', 3, '7 серии', 3670000);

  cars: Car[] = [this.car1, this.car2, this.car3, this.car4, this.car5, this.car6];

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
  openCreditForm(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}

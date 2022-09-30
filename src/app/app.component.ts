import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: string = "USD"
  constructor(private currencyService: CurrencyService, private router: Router) {

  }

  sendCurrency(event: string) {
    console.log(event)
    this.currencyService.setCurrency(event)
  }

  goToHome() {
    this.router.navigate([''])
  }
}

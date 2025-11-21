import { Component, input } from '@angular/core';
import { investmentResultModel, InvestmentTotals } from './investment-result.model';
@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
  moneda = 'HNL';
  investmentResultModel = input.required<investmentResultModel[]>();
  totals = input.required<InvestmentTotals>();
}

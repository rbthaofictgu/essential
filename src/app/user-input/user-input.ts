import { Component, computed, inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { investmentResultModel } from '../investment-results/investment-result.model';
import { InvestmentResults } from '../investment-results/investment-results';
import { UserInputFacade } from './facade/user-input-facade';
import { userInputModel } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule,InvestmentResults],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @ViewChild('userInputForm') form?: NgForm;
  enteredInitialInvesment = '';
  enteredAnnualInvesment = '';
  enteredExpectedReturn = '';
  enteredInvestmentDuration = '';
  userInputFacade = inject(UserInputFacade);
  readonly userInputModelSignal = signal<userInputModel | null>(null);
   // 🔥 Computed basada en la signal anterior
  readonly investmentResults = computed<investmentResultModel[]>(() => {
    const userInput = this.userInputModelSignal();
    if (!userInput) {
      return [];
    }
    return this.userInputFacade.calculateProfitability(userInput);
  });

  readonly investmentTotals = computed(() => {
    const result = this.investmentResults();
    return result.reduce(
      (acc, item) => {
        acc.totalPrincipal += item.principalAmount;
        acc.accruedAnnuality  += item.accruedAnnuality;
        acc.totalInterest  += item.interestAmount;
        acc.totalAmount    += item.totalAmount;
        acc.accruedInterest = item.accruedInterest;
        return acc;
      },
      { totalPrincipal: 0, accruedAnnuality: 0, totalInterest: 0, totalAmount: 0,accruedInterest: 0 }
    );
  });

  onSubmit() {
    if (this.form?.valid) {
      this.userInputModelSignal.set({
        initialInvesment: Number(this.enteredInitialInvesment),
        annualInvesment: Number(this.enteredAnnualInvesment),
        expectedReturn: Number(this.enteredExpectedReturn),
        investmentDuration: Number(this.enteredInvestmentDuration),
      });
    }
  }

  onClear() {
    this.form?.reset();
  }

}

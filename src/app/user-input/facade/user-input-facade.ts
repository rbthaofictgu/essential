import { Injectable } from '@angular/core';

import { investmentResultModel } from '../../investment-results/investment-result.model';
import { userInputModel } from '../user-input.model';

@Injectable({
  providedIn: 'root'
})
export class UserInputFacade {
  calculateProfitability(userInputModel: userInputModel): investmentResultModel[] {
    const {
      initialInvesment,
      annualInvesment,
      expectedReturn,
      investmentDuration
    } = userInputModel;
    // 🔥 Normalización segura
    const initial = Number(initialInvesment) || 0;
    const annualityTable = Number(annualInvesment) || 0;
    let accruedAnnuality = 0;
    let annuality = 0;
    const rate = (Number(expectedReturn) || 0) / 100;
    const duration = Number(investmentDuration) || 0;
    const results: investmentResultModel[] = [];
    let total = initial;
    let principalAmount = 0;
    let accruedInterest=0;
    let totalInvest = 0;
    let interestAmount = 0;
    for (let year = 1; year <= duration; year++) {
      if (year > 1) {
        totalInvest += annualityTable;
        principalAmount = total + annualityTable;
        accruedAnnuality += annualityTable;
        annuality= annualityTable;
        interestAmount = principalAmount * rate;        
        accruedInterest+=interestAmount;
      } else {
        principalAmount = total;
        totalInvest = initial;
        accruedAnnuality += 0;
        annuality= 0;
        interestAmount = principalAmount * rate;
        accruedInterest=interestAmount;
      }
      const totalAmount = principalAmount + interestAmount;
      results.push({
        year,
        totalInvest,
        principalAmount,
        accruedAnnuality,
        interestAmount,
        accruedInterest,
        totalAmount,
      });
      total = totalAmount;
    }
    return results;
  }
}

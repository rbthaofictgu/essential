import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResults } from '../investment-results/investment-results';
import { UserInput } from './user-input';

@NgModule({
  declarations: [UserInput,InvestmentResults],
  exports: [UserInput],
  imports: [CommonModule,FormsModule]
})
export class UserInputModule { }


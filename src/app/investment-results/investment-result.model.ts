export  interface investmentResultModel {
  year: number;
  totalInvest: number;
  principalAmount: number;
  accruedAnnuality: number;
  interestAmount: number;
  accruedInterest: number;
  totalAmount: number;
};

export type InvestmentTotals = Readonly<{
  totalPrincipal: number;
  accruedAnnuality: number;
  totalInterest: number;
  accruedInterest: number;
  totalAmount: number;
}>;
export type FinancialData = {
  user: {
    name: string;
    email: string;
  };
  summary: {
    netWorth: number;
    assets: number;
    liabilities: number;
    creditScore: number;
  };
  assets: {
    cash: Array<{ account: string; balance: number }>;
    investments: Array<{ name: string; type: string; value: number; annualPerformance: number; ticker?: string }>;
    epf: { balance: number };
    property: Array<{ address: string; value: number }>;
  };
  liabilities: {
    creditCards: Array<{ issuer: string; outstanding: number; limit: number }>;
    loans: Array<{ type: string; lender: string; outstanding: number; interestRate: number }>;
  };
  netWorthHistory: Array<{ date: string; value: number }>;
  creditScoreHistory: Array<{ date: string; score: number }>;
};

export const mcpData: FinancialData = {
  user: {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
  },
  summary: {
    netWorth: 5250000,
    assets: 7250000,
    liabilities: 2000000,
    creditScore: 780,
  },
  assets: {
    cash: [
      { account: 'Savings Account', balance: 500000 },
      { account: 'Checking Account', balance: 150000 },
    ],
    investments: [
      { name: 'Nifty 50 Index Fund', type: 'Mutual Fund', value: 1200000, annualPerformance: 15, ticker: 'NIFTY50' },
      { name: 'Bluechip Equity Fund', type: 'Mutual Fund', value: 800000, annualPerformance: 12 },
      { name: 'Alphabet Inc. (Google)', type: 'Stocks', value: 1000000, annualPerformance: 22, ticker: 'GOOGL' },
      { name: 'Reliance Industries', type: 'Stocks', value: 750000, annualPerformance: 18, ticker: 'RELIANCE.BSE' },
      { name: 'Tata Motors', type: 'Stocks', value: 500000, annualPerformance: 30, ticker: 'TATAMOTORS.BSE' },
      { name: 'Government Bonds', type: 'Bonds', value: 350000, annualPerformance: 7 },
    ],
    epf: {
      balance: 1000000,
    },
    property: [
      { address: '123, Urban City, India', value: 1000000 },
    ],
  },
  liabilities: {
    creditCards: [
      { issuer: 'Alpha Bank', outstanding: 50000, limit: 200000 },
    ],
    loans: [
      { type: 'Home Loan', lender: 'Beta Finance', outstanding: 1500000, interestRate: 8.5 },
      { type: 'Car Loan', lender: 'Gamma Auto', outstanding: 450000, interestRate: 9.2 },
    ],
  },
  netWorthHistory: [
    { date: '2023-01-01', value: 4200000 },
    { date: '2023-04-01', value: 4500000 },
    { date: '2023-07-01', value: 4800000 },
    { date: '2023-10-01', value: 5100000 },
    { date: '2024-01-01', value: 5300000 },
    { date: '2024-04-01', value: 5250000 },
  ],
  creditScoreHistory: [
    { date: '2023-01-01', score: 750 },
    { date: '2023-07-01', score: 765 },
    { date: '2024-01-01', score: 780 },
  ]
};

export const getFinancialData = async (): Promise<FinancialData> => {
  // In a real application, this would be an API call to Fi's MCP Server.
  return new Promise(resolve => setTimeout(() => resolve(mcpData), 500));
};

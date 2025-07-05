"use server";

import { financialInsights } from "@/ai/flows/financial-insights-prompt";
import { summarizeFinancialData } from "@/ai/flows/summarize-financial-data";
import { FinancialData } from "@/lib/mcp-data";
import { getNewStockValue } from "@/services/finance-service";

export async function askFinancialQuestion(
  question: string,
  financialData: FinancialData
) {
  try {
    const { answer } = await financialInsights({
      question,
      financialData: JSON.stringify(financialData),
    });
    return { success: true, answer };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Sorry, I couldn't process your question right now.",
    };
  }
}

export async function getRealtimeFinancialData(
  baseData: FinancialData
): Promise<FinancialData> {
  // Deep copy to avoid mutating the original object
  const newData = JSON.parse(JSON.stringify(baseData));

  let totalAssetDelta = 0;

  const investmentPromises = newData.assets.investments
    .filter((inv: { type: string; ticker?: string }) => inv.type === 'Stocks' && inv.ticker)
    .map(async (investment: { name: string; value: number; ticker: string }) => {
      const originalValue = investment.value;
      // In our mock service, originalValue is used to calculate a new pseudo-random value.
      // In a real scenario, you'd use the ticker and number of shares to get the new value.
      const newValue = await getNewStockValue(investment.ticker, originalValue);
      const delta = newValue - originalValue;
      totalAssetDelta += delta;
      investment.value = newValue;
      return investment;
    });

  await Promise.all(investmentPromises);

  // Update summary figures
  newData.summary.assets += totalAssetDelta;
  newData.summary.netWorth += totalAssetDelta;
  
  // Update net worth history with a new entry for today
  const lastHistory = newData.netWorthHistory[newData.netWorthHistory.length - 1];
  const lastDate = new Date(lastHistory.date);
  
  const today = new Date();
  // Set hours to 0 to compare dates only
  today.setHours(0,0,0,0);
  lastDate.setHours(0,0,0,0);

  const newHistoryEntry = {
    date: new Date().toISOString().split('T')[0],
    value: parseFloat(newData.summary.netWorth.toFixed(2)),
  };

  if (lastDate.getTime() === today.getTime()) {
     // If the last entry is from today, update it
     newData.netWorthHistory[newData.netWorthHistory.length - 1] = newHistoryEntry;
  } else {
    // Otherwise, add a new entry
     newData.netWorthHistory.push(newHistoryEntry);
  }

  return newData;
}

export async function getAiSummary(financialData: FinancialData) {
  try {
    const { summary } = await summarizeFinancialData({
      financialData: JSON.stringify(financialData),
    });
    return { success: true, summary };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "An error occurred while generating the financial summary.",
    };
  }
}

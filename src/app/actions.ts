"use server";

import { financialInsights } from "@/ai/flows/financial-insights-prompt";
import { FinancialData } from "@/lib/mcp-data";

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

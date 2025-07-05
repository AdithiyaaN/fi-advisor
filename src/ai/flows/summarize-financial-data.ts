'use server';
/**
 * @fileOverview Summarizes a user's financial data and highlights key trends and insights.
 *
 * - summarizeFinancialData - A function that generates a financial summary.
 * - SummarizeFinancialDataInput - The input type for the summarizeFinancialData function.
 * - SummarizeFinancialDataOutput - The return type for the summarizeFinancialData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getStockPrice } from '@/services/finance-service';

const getStockPriceTool = ai.defineTool(
  {
    name: 'getStockPrice',
    description: 'Get the current stock price for a given ticker symbol.',
    inputSchema: z.object({ ticker: z.string().describe('The stock ticker symbol, e.g., GOOGL, RELIANCE.BSE') }),
    outputSchema: z.number(),
  },
  async ({ ticker }) => {
    return await getStockPrice(ticker);
  }
);

const SummarizeFinancialDataInputSchema = z.object({
  financialData: z.string().describe('A JSON string containing the user\'s financial data.'),
});
export type SummarizeFinancialDataInput = z.infer<typeof SummarizeFinancialDataInputSchema>;

const SummarizeFinancialDataOutputSchema = z.object({
  summary: z.string().describe('A summary of the user\'s financial data, including key trends and insights. You must mention current stock prices for investments using the provided tool.'),
});
export type SummarizeFinancialDataOutput = z.infer<typeof SummarizeFinancialDataOutputSchema>;

export async function summarizeFinancialData(input: SummarizeFinancialDataInput): Promise<SummarizeFinancialDataOutput> {
  return summarizeFinancialDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFinancialDataPrompt',
  input: {schema: SummarizeFinancialDataInputSchema},
  output: {schema: SummarizeFinancialDataOutputSchema},
  tools: [getStockPriceTool],
  prompt: `You are a personal finance expert. Please analyze the following financial data and provide a concise summary of the user's overall financial health, including key trends and insights.

When discussing stock investments, you must use the getStockPrice tool to fetch and include the most current price for each stock. Do not use the 'value' field from the input data for stocks, as it represents the total holding value which may be outdated.

Financial Data: {{{financialData}}}

Summary: `,
});

const summarizeFinancialDataFlow = ai.defineFlow(
  {
    name: 'summarizeFinancialDataFlow',
    inputSchema: SummarizeFinancialDataInputSchema,
    outputSchema: SummarizeFinancialDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

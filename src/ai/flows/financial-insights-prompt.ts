// financial-insights-prompt.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating financial insights based on user questions.
 *
 * - financialInsights - A function that takes a user's financial question as input and returns financial insights.
 * - FinancialInsightsInput - The input type for the financialInsights function.
 * - FinancialInsightsOutput - The return type for the financialInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialInsightsInputSchema = z.object({
  question: z.string().describe('The user question about their finances.'),
  financialData: z.string().describe('The user financial data from Fi’s MCP.'),
});
export type FinancialInsightsInput = z.infer<typeof FinancialInsightsInputSchema>;

const FinancialInsightsOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question based on their financial data.'),
});
export type FinancialInsightsOutput = z.infer<typeof FinancialInsightsOutputSchema>;

export async function financialInsights(input: FinancialInsightsInput): Promise<FinancialInsightsOutput> {
  return financialInsightsFlow(input);
}

const financialInsightsPrompt = ai.definePrompt({
  name: 'financialInsightsPrompt',
  input: {schema: FinancialInsightsInputSchema},
  output: {schema: FinancialInsightsOutputSchema},
  prompt: `You are a personal finance advisor. Use the financial data provided to answer the user's question.

Financial Data:
{{financialData}}

Question: {{question}}

Answer:`,
});

const financialInsightsFlow = ai.defineFlow(
  {
    name: 'financialInsightsFlow',
    inputSchema: FinancialInsightsInputSchema,
    outputSchema: FinancialInsightsOutputSchema,
  },
  async input => {
    const {output} = await financialInsightsPrompt(input);
    return output!;
  }
);

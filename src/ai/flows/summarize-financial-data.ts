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

const SummarizeFinancialDataInputSchema = z.object({
  financialData: z.string().describe('A JSON string containing the user\'s financial data.'),
});
export type SummarizeFinancialDataInput = z.infer<typeof SummarizeFinancialDataInputSchema>;

const SummarizeFinancialDataOutputSchema = z.object({
  summary: z.string().describe('A summary of the user\'s financial data, including key trends and insights.'),
});
export type SummarizeFinancialDataOutput = z.infer<typeof SummarizeFinancialDataOutputSchema>;

export async function summarizeFinancialData(input: SummarizeFinancialDataInput): Promise<SummarizeFinancialDataOutput> {
  return summarizeFinancialDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFinancialDataPrompt',
  input: {schema: SummarizeFinancialDataInputSchema},
  output: {schema: SummarizeFinancialDataOutputSchema},
  prompt: `You are a personal finance expert. Please analyze the following financial data and provide a concise summary of the user\'s overall financial health, including key trends and insights.

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

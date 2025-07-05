import { summarizeFinancialData } from '@/ai/flows/summarize-financial-data';
import { FinancialData } from '@/lib/mcp-data';
import { Skeleton } from './ui/skeleton';
import React from 'react';

type FinancialSummaryProps = {
  financialData: FinancialData;
};

async function FinancialSummaryContent({ financialData }: FinancialSummaryProps) {
  const { summary } = await summarizeFinancialData({
    financialData: JSON.stringify(financialData),
  });

  return <p className="text-sm text-muted-foreground whitespace-pre-wrap">{summary}</p>;
}

export function FinancialSummary({ financialData }: FinancialSummaryProps) {
  return (
    <React.Suspense fallback={<FinancialSummarySkeleton />}>
      <FinancialSummaryContent financialData={financialData} />
    </React.Suspense>
  );
}


function FinancialSummarySkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}

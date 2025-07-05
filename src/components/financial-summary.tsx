'use client';

import { getAiSummary } from '@/app/actions';
import { FinancialData } from '@/lib/mcp-data';
import { Skeleton } from './ui/skeleton';
import React, { useState, useEffect } from 'react';
import { ScrollArea } from './ui/scroll-area';

type FinancialSummaryProps = {
  financialData: FinancialData;
};

export function FinancialSummary({ financialData }: FinancialSummaryProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      setIsLoading(true);
      const result = await getAiSummary(financialData);
      if (result.success && result.summary) {
        setSummary(result.summary);
      } else {
        setSummary(result.error || 'Failed to load summary.');
      }
      setIsLoading(false);
    };

    if (financialData) {
      fetchSummary();
    }
  }, [financialData]);

  if (isLoading) {
    return <FinancialSummarySkeleton />;
  }

  return (
    <ScrollArea className="h-72">
      <p className="text-sm text-muted-foreground whitespace-pre-wrap pr-4">
        {summary}
      </p>
    </ScrollArea>
  );
}

function FinancialSummarySkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

'use client';

import { getAiSummary } from '@/app/actions';
import { FinancialData } from '@/lib/mcp-data';
import { Skeleton } from './ui/skeleton';
import React, { useState, useEffect } from 'react';

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
    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
      {summary}
    </p>
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

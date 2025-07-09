'use client';

import { useState, useEffect } from 'react';
import { Dashboard } from '@/components/dashboard';
import type { FinancialData } from '@/lib/mcp-data';
import { getFinancialDataFromMcp } from '@/services/mcp-service';
import { getRealtimeFinancialData } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      // Start with the static data
      const staticData = await getFinancialDataFromMcp();
      setFinancialData(staticData);
      setIsLoading(false); // Show initial dashboard

      // Then fetch and merge real-time data
      try {
        const realtimeData = await getRealtimeFinancialData(staticData);
        setFinancialData(realtimeData);
      } catch (error) {
        console.error("Failed to fetch real-time data:", error);
        // Optionally, show a toast to the user
      }
    }

    loadData();
  }, []);

  if (isLoading || !financialData) {
    return <DashboardSkeleton />;
  }

  return <Dashboard financialData={financialData} />;
}


function DashboardSkeleton() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-9 w-64 mb-2" />
          <Skeleton className="h-5 w-80" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Skeleton className="h-80 xl:col-span-2" />
        <Skeleton className="h-80" />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Skeleton className="h-80" />
        <Skeleton className="h-80 xl:col-span-2" />
      </div>
    </div>
  );
}

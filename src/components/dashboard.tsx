'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FinancialData } from '@/lib/mcp-data';
import { PageHeader } from './page-header';
import { KpiCard } from './kpi-card';
import { Landmark, Wallet, BadgePercent, Receipt, PieChart as PieChartIcon, BarChart3 as BarChartIcon, LineChart as LineChartIcon } from 'lucide-react';
import { FinancialSummary } from './financial-summary';
import { NetWorthChart } from './net-worth-chart';
import { AssetLiabilityChart } from './asset-liability-chart';
import { InvestmentPerformanceChart } from './investment-performance-chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DebtBreakdownChart } from './debt-breakdown-chart';

type DashboardProps = {
  financialData: FinancialData;
};

export function Dashboard({ financialData }: DashboardProps) {
  const [assetChartType, setAssetChartType] = useState<'pie' | 'bar' | 'line'>(
    'pie'
  );

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 lg:p-10">
      <PageHeader userName={financialData.user.name} />
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <KpiCard
          title="Total Assets"
          value={financialData.summary.assets}
          icon={<Landmark className="h-5 w-5" />}
        />
        <KpiCard
          title="Total Liabilities"
          value={financialData.summary.liabilities}
          icon={<Receipt className="h-5 w-5" />}
          isNegative
        />
        <KpiCard
          title="Net Worth"
          value={financialData.summary.netWorth}
          icon={<Wallet className="h-5 w-5" />}
          trend={financialData.netWorthHistory.slice(-2)}
          trendKey="value"
        />
        <KpiCard
          title="Credit Score"
          value={financialData.summary.creditScore}
          icon={<BadgePercent className="h-5 w-5" />}
          trend={financialData.creditScoreHistory.slice(-2)}
          trendKey="score"
        />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2 shadow-xl ring-8 ring-white dark:ring-black/20">
          <CardHeader>
            <CardTitle>Net Worth Over Time</CardTitle>
            <CardDescription>
              A historical view of your financial growth.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NetWorthChart data={financialData.netWorthHistory} />
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div>
              <CardTitle>Asset vs. Liability</CardTitle>
              <CardDescription>
                A breakdown of your financial standing.
              </CardDescription>
            </div>
            <Tabs
              value={assetChartType}
              onValueChange={(v) =>
                setAssetChartType(v as typeof assetChartType)
              }
            >
              <TabsList className="h-8 gap-1">
                <TabsTrigger value="pie" className="h-6 w-6 p-0">
                  <PieChartIcon className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="bar" className="h-6 w-6 p-0">
                  <BarChartIcon className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="line" className="h-6 w-6 p-0">
                  <LineChartIcon className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <AssetLiabilityChart
              data={financialData.summary}
              type={assetChartType}
            />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="shadow-lg xl:col-span-2">
          <Tabs defaultValue="investments">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Analysis</CardTitle>
                <CardDescription>
                  Toggle between investment performance and debt breakdown.
                </CardDescription>
              </div>
              <TabsList>
                <TabsTrigger value="investments">Investments</TabsTrigger>
                <TabsTrigger value="debt">Debt</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="investments" className="m-0 p-0">
                <div className="pl-2">
                  <InvestmentPerformanceChart
                    data={financialData.assets.investments}
                  />
                </div>
              </TabsContent>
              <TabsContent value="debt" className="m-0 p-0">
                <DebtBreakdownChart data={financialData.liabilities} />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        <Card className="shadow-lg xl:col-span-1">
          <CardHeader>
            <CardTitle>AI Financial Summary</CardTitle>
            <CardDescription>
              A personalized summary generated by Gemini.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FinancialSummary financialData={financialData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

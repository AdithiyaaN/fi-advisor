
"use client"

import * as React from "react"
import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltipContent, type ChartConfig, ChartLegendContent } from '@/components/ui/chart';
import { formatCurrency } from '@/lib/utils';
import type { FinancialData } from '@/lib/mcp-data';

type DebtBreakdownChartProps = {
  data: FinancialData['liabilities'];
};

const COLORS = [
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
];

export function DebtBreakdownChart({ data }: DebtBreakdownChartProps) {
  const { chartData, chartConfig } = React.useMemo(() => {
    const allDebts = [
      ...data.creditCards.map(cc => ({ name: `${cc.issuer} Card`, value: cc.outstanding })),
      ...data.loans.map(loan => ({ name: loan.type, value: loan.outstanding })),
    ].filter(d => d.value > 0);

    const config = allDebts.reduce((acc, debt, index) => {
      const key = debt.name.replace(/ /g, '');
      acc[key] = {
        label: debt.name,
        color: COLORS[index % COLORS.length]
      };
      return acc;
    }, {} as ChartConfig);

    const cData = allDebts.map(debt => ({
      name: debt.name.replace(/ /g, ''),
      value: debt.value,
    }));

    return { chartData: cData, chartConfig: config };
  }, [data]);

  if (chartData.length === 0) {
    return <div className="flex h-[300px] w-full items-center justify-center text-muted-foreground">No debt to display.</div>;
  }

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <PieChart accessibilityLayer>
        <Tooltip 
          content={<ChartTooltipContent 
            nameKey="name"
            formatter={(value) => formatCurrency(value as number)}
          />} 
        />
        <Legend content={<ChartLegendContent nameKey="name" />} />
        <Pie data={chartData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="80%" paddingAngle={5}>
          {chartData.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={`var(--color-${entry.name})`} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

"use client"

import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

type InvestmentPerformanceChartProps = {
  data: Array<{ name: string; annualPerformance: number }>;
};

const chartConfig = {
  annualPerformance: {
    label: "Annual Performance",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function InvestmentPerformanceChart({ data }: InvestmentPerformanceChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="name"
          tickFormatter={(value) => value.split(' ').slice(0, 2).join(' ')}
          tickLine={false}
          axisLine={false}
          angle={-45}
          textAnchor="end"
          height={60}
          interval={0}
          fontSize={12}
        />
        <YAxis
          tickFormatter={(value) => `${value}%`}
          tickLine={false}
          axisLine={false}
          width={30}
          fontSize={12}
        />
        <Tooltip
          cursor={{ fill: 'hsl(var(--muted))' }}
          content={<ChartTooltipContent formatter={(value) => `${value}%`} />}
        />
        <Bar dataKey="annualPerformance" fill="var(--color-annualPerformance)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}

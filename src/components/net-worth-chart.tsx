"use client"

import { Line, LineChart, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

type NetWorthChartProps = {
  data: Array<{ date: string; value: number }>;
};

const chartConfig = {
  value: {
    label: "Net Worth",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function NetWorthChart({ data }: NetWorthChartProps) {
  const chartData = data.map(item => ({
    ...item,
    date: new Date(item.date),
  }));

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="date"
          tickFormatter={(date) => format(date, 'MMM yy')}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tickFormatter={(value) => `₹${value / 100000}L`}
          tickLine={false}
          axisLine={false}
          width={40}
        />
        <Tooltip
          content={
            <ChartTooltipContent
              formatter={(value) => formatCurrency(value as number)}
              labelFormatter={(label) => format(new Date(label), 'PPP')}
            />
          }
        />
        <Line
          dataKey="value"
          type="monotone"
          stroke="var(--color-value)"
          strokeWidth={2}
          dot={{
            r: 4,
            fill: "var(--color-value)",
            stroke: "hsl(var(--background))",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}

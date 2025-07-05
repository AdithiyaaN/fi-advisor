"use client"

import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { formatCurrency } from '@/lib/utils';

type AssetLiabilityChartProps = {
  data: {
    assets: number;
    liabilities: number;
  };
};

const chartConfig = {
  Assets: {
    label: "Assets",
    color: "hsl(var(--chart-1))",
  },
  Liabilities: {
    label: "Liabilities",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function AssetLiabilityChart({ data }: AssetLiabilityChartProps) {
  const chartData = [
    { name: 'Assets', value: data.assets },
    { name: 'Liabilities', value: data.liabilities },
  ];

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <PieChart accessibilityLayer>
        <Tooltip 
          content={<ChartTooltipContent 
            hideLabel 
            nameKey="name"
            formatter={(value) => formatCurrency(value as number)}
          />} 
        />
        <Legend
          content={({ payload }) => (
            <ul className="flex justify-center items-center gap-4 pt-4">
              {payload?.map((entry, index) => (
                <li key={`item-${index}`} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-muted-foreground">{entry.value}</span>
                </li>
              ))}
            </ul>
          )}
        />
        <Pie data={chartData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="80%" paddingAngle={5}>
          {chartData.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={`var(--color-${entry.name})`} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
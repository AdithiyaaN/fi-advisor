"use client"

import { Pie, PieChart, Tooltip, Cell, Legend, Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { formatCurrency } from '@/lib/utils';

type AssetLiabilityChartProps = {
  data: {
    assets: number;
    liabilities: number;
  };
  type: 'pie' | 'bar' | 'line';
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

export function AssetLiabilityChart({ data, type }: AssetLiabilityChartProps) {
  const chartData = [
    { name: 'Assets', value: data.assets },
    { name: 'Liabilities', value: data.liabilities },
  ];

  const compactFormatter = (value: number) => formatCurrency(value, { notation: 'compact' });

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      {type === 'pie' && (
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
      )}
      {type === 'bar' && (
        <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
          <CartesianGrid vertical={false} />
          <XAxis 
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
          />
          <YAxis 
            tickFormatter={compactFormatter}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <Tooltip 
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={<ChartTooltipContent 
                formatter={(value) => formatCurrency(value as number)}
            />} 
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {chartData.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={`var(--color-${entry.name})`} />
            ))}
          </Bar>
        </BarChart>
      )}
      {type === 'line' && (
        <LineChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
          <CartesianGrid vertical={false} />
          <XAxis 
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
          />
          <YAxis 
            tickFormatter={compactFormatter}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <Tooltip 
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={<ChartTooltipContent 
                formatter={(value) => formatCurrency(value as number)}
            />} 
          />
          <Line
            dataKey="value"
            type="monotone"
            stroke="var(--color-Assets)"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "var(--color-Assets)",
              stroke: "hsl(var(--background))",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      )}
    </ChartContainer>
  );
}

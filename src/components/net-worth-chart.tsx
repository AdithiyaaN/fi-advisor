"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { ChartTooltipContent } from '@/components/ui/chart';

type NetWorthChartProps = {
  data: Array<{ date: string; value: number }>;
};

export function NetWorthChart({ data }: NetWorthChartProps) {
  const chartData = data.map(item => ({
    ...item,
    date: new Date(item.date),
  }));

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
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
            type="monotone"
            dataKey="value"
            name="Net Worth"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: 'hsl(var(--primary))',
              stroke: 'hsl(var(--background))',
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

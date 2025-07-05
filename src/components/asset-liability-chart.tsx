"use client"

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell, Legend } from 'recharts';
import { ChartTooltipContent } from '@/components/ui/chart';
import { formatCurrency } from '@/lib/utils';

type AssetLiabilityChartProps = {
  data: {
    assets: number;
    liabilities: number;
  };
};

export function AssetLiabilityChart({ data }: AssetLiabilityChartProps) {
  const chartData = [
    { name: 'Assets', value: data.assets, fill: 'hsl(var(--chart-1))' },
    { name: 'Liabilities', value: data.liabilities, fill: 'hsl(var(--chart-2))' },
  ];
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
            content={<ChartTooltipContent 
              hideLabel 
              formatter={(value) => formatCurrency(value as number)}
            />} 
          />
          <Pie data={chartData} dataKey="value" nameKey="name" innerRadius="60%" outerRadius="80%" paddingAngle={5}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            content={({ payload }) => (
              <ul className="flex justify-center items-center gap-4">
                {payload?.map((entry, index) => (
                  <li key={`item-${index}`} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span className="text-muted-foreground">{entry.value}</span>
                  </li>
                ))}
              </ul>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

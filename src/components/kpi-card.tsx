"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

type KpiCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: Array<{ [key: string]: any }>;
  trendKey?: string;
  isNegative?: boolean;
};

export function KpiCard({ title, value, icon, trend, trendKey, isNegative = false }: KpiCardProps) {
  let trendPercentage: number | null = null;
  if (trend && trend.length > 1 && trendKey) {
    const latest = trend[1][trendKey];
    const previous = trend[0][trendKey];
    if (previous !== 0) {
      trendPercentage = ((latest - previous) / previous) * 100;
    }
  }

  const TrendIcon = trendPercentage !== null && trendPercentage >= 0 ? TrendingUp : TrendingDown;
  const trendColor = trendPercentage !== null && trendPercentage >= 0 ? 'text-emerald-500' : 'text-red-500';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {title !== 'Credit Score' ? formatCurrency(value) : value}
        </div>
        {trendPercentage !== null && (
          <p className="text-xs text-muted-foreground flex items-center">
            <TrendIcon className={`mr-1 h-4 w-4 ${trendColor}`} />
            <span className={trendColor}>{trendPercentage.toFixed(2)}%</span> from last period
          </p>
        )}
      </CardContent>
    </Card>
  );
}

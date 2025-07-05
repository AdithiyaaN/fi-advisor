"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { useState, useEffect } from 'react';

type KpiCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: Array<{ [key: string]: any }>;
  trendKey?: string;
  isNegative?: boolean;
};

export function KpiCard({ title, value, icon, trend, trendKey, isNegative = false }: KpiCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  let trendPercentage: number | null = null;
  if (trend && trend.length > 1 && trendKey) {
    const latest = trend[1][trendKey];
    const previous = trend[0][trendKey];
    if (previous !== 0) {
      trendPercentage = ((latest - previous) / previous) * 100;
    }
  }

  const TrendIcon = trendPercentage === null ? null : trendPercentage >= 0 ? TrendingUp : TrendingDown;
  const isGoodTrend = trendPercentage === null ? false : isNegative ? trendPercentage < 0 : trendPercentage >= 0;
  const trendColor = isGoodTrend ? 'text-emerald-500' : 'text-red-500';

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-3xl font-bold">
          {isMounted
            ? (title !== 'Credit Score' ? formatCurrency(value) : value)
            : <Skeleton className="h-8 w-32" />}
        </div>
        {trendPercentage !== null && isMounted && TrendIcon && (
          <p className="text-xs text-muted-foreground flex items-center pt-1">
            <TrendIcon className={`mr-1 h-3 w-3 ${trendColor}`} />
            <span className={trendColor}>{Math.abs(trendPercentage).toFixed(2)}%</span>
            <span className="ml-1">from last period</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}

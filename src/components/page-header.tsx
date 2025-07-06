"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { mcpData } from '@/lib/mcp-data';

type PageHeaderProps = {
  userName: string;
};

export function PageHeader({ userName }: PageHeaderProps) {
  const handleExport = () => {
    const dataStr = JSON.stringify(mcpData, null, 2);
    const dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'fi-advisor-data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Welcome back, {userName}!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s a snapshot of your financial health.
        </p>
      </div>
      <Button onClick={handleExport} variant="outline" className="w-full sm:w-auto">
        <Download className="mr-2 h-4 w-4" />
        Export Data
      </Button>
    </div>
  );
}

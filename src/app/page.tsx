import { Dashboard } from '@/components/dashboard';
import { getFinancialData } from '@/lib/mcp-data';

export default async function Home() {
  const financialData = await getFinancialData();
  return <Dashboard financialData={financialData} />;
}

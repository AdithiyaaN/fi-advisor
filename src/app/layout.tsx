import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { getFinancialDataFromMcp } from '@/services/mcp-service';
import { ChatAssistant } from '@/components/chat-assistant';
import { AppSidebar } from '@/components/app-sidebar';

export const metadata: Metadata = {
  title: 'Fi Advisor',
  description: 'Your personal AI-powered financial advisor.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const financialData = await getFinancialDataFromMcp();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={cn(
          'font-body antialiased',
          'min-h-screen bg-background font-sans'
        )}
        suppressHydrationWarning
      >
        <SidebarProvider>
          <AppSidebar user={financialData.user} />
          <SidebarInset>{children}</SidebarInset>
          <ChatAssistant financialData={financialData} />
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}

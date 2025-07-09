
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, Settings, Wallet } from 'lucide-react';
import type { FinancialData } from '@/lib/mcp-data';

type AppSidebarProps = {
  user: FinancialData['user'];
};

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-8 w-8 text-primary"
            fill="currentColor"
          >
            <rect width="256" height="256" fill="none" />
            <path d="M68,143.2,42,156.8A32,32,0,0,1,32,128,31.5,31.5,0,0,1,54,99.2l29.4,14.6" opacity="0.2" />
            <path d="M97.4,113.8,68,128.5l-26-13.6A32,32,0,0,1,32,86.4,31.5,31.5,0,0,1,54,58.4L83.4,73" opacity="0.2" />
            <path d="M188,112.8,214,99.2A31.5,31.5,0,0,0,224,72a32,32,0,0,0-22-29.6L162.6,27.8" opacity="0.2" />
            <path d="M158.6,142.2,188,127.5l26,13.6a31.5,31.5,0,0,1,10,27.6A32,32,0,0,1,202,197.6l-29.4-14.6" opacity="0.2" />
            <path d="M128,128,97.4,113.8a32,32,0,0,0-29.4,53.4l26,13.6Z" opacity="0.2" />
            <path d="M128,128,158.6,142.2a32,32,0,0,1,29.4-53.4l-26-13.6Z" opacity="0.2" />
            <path d="M68,143.2,42,156.8A32,32,0,0,1,32,128,31.5,31.5,0,0,1,54,99.2l29.4,14.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M97.4,113.8,68,128.5l-26-13.6A32,32,0,0,1,32,86.4,31.5,31.5,0,0,1,54,58.4L83.4,73" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M188,112.8,214,99.2A31.5,31.5,0,0,0,224,72a32,32,0,0,0-22-29.6L162.6,27.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M158.6,142.2,188,127.5l26,13.6a31.5,31.5,0,0,1,10,27.6A32,32,0,0,1,202,197.6l-29.4-14.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <line x1="128" y1="128" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M128,128,97.4,113.8a32,32,0,0,0-29.4,53.4l26,13.6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <path d="M128,128l30.6,14.2a32,32,0,0,1,29.4-53.4l-26-13.6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>

          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Fi Advisor
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Dashboard" isActive={pathname === '/'}>
              <Link href="/">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Accounts" isActive={pathname === '/accounts'}>
              <Link href="/accounts">
                <Wallet />
                <span>Accounts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings" isActive={pathname === '/settings'}>
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
          <Avatar className="size-9">
            <AvatarImage
              data-ai-hint="profile picture"
              src="https://placehold.co/100x100.png"
              alt={user.name}
            />
            <AvatarFallback>
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-medium text-foreground">
              {user.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {user.email}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

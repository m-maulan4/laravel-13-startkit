import { Link } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItemCustom } from '@/types';
import React from 'react';

export function NavMain({ items = [] }: { items: NavItemCustom[] }) {
    const { isCurrentUrl } = useCurrentUrl();

    return (
        <SidebarGroup className="px-2 py-0">
            {items.map((d, key) => (
                <React.Fragment key={key}>
                    <SidebarGroupLabel>{d.label}</SidebarGroupLabel>
                    <SidebarMenu>
                        {d.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isCurrentUrl(item.href)}
                                    tooltip={{ children: item.title }}
                                >
                                    <Link href={item.href} prefetch>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                                {item.subItems?.map((subItem, key) => (
                                    <SidebarMenuSub
                                        className="border-l-4"
                                        key={key}
                                    >
                                        <Link href={subItem.href} prefetch>
                                            <span>{subItem.title}</span>
                                        </Link>
                                    </SidebarMenuSub>
                                ))}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </React.Fragment>
            ))}
        </SidebarGroup>
    );
}

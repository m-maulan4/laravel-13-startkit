import { Link } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useCurrentUrl } from '@/hooks/use-current-url';
import type { NavItem } from '@/types';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible';
import { ChevronDown, ChevronLeft } from 'lucide-react';

export function NavMain({ items }: { items: NavItem[] }) {
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarMenu className="gap-2">
                {items.map((item) =>
                    item.subItems ? (
                        <MenuWithSub item={item} key={item.title} />
                    ) : (
                        <Menu item={item} key={item.title} />
                    ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    );
}

function Menu({ item }: { item: NavItem }) {
    const { isCurrentUrl } = useCurrentUrl();
    return (
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
        </SidebarMenuItem>
    );
}
function MenuWithSub({ item }: { item: NavItem }) {
    const { isCurrentUrl } = useCurrentUrl();
    return (
        <SidebarMenuItem>
            <Collapsible
                defaultOpen={isCurrentUrl(item.href)}
                className="group/collapsible"
            >
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                        isActive={isCurrentUrl(item.href)}
                        tooltip={{ children: item.title }}
                    >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronLeft className="ml-auto transition-transform group-data-[state=open]/collapsible:-rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub className="border-l-2 border-foreground">
                        {item.subItems?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                    isActive={isCurrentUrl(subItem.href)}
                                    asChild
                                >
                                    <Link href={subItem.href} prefetch>
                                        <span>{subItem.title}</span>
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    );
}

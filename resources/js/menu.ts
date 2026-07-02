import { LayoutDashboard } from 'lucide-react';
import { dashboard } from './routes';
import { NavItemCustom } from './types';

export const mainNavItems: NavItemCustom[] = [
    {
        label: 'Home',
        items: [
            {
                title: 'Dashboard',
                href: dashboard(),
                icon: LayoutDashboard,
                isActive: false,
                subItems: [
                    {
                        title: 'test',
                        href: dashboard(),
                    },
                ],
            },
        ],
    },
];

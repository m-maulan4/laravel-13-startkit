import { LayoutGrid, User } from 'lucide-react';
import { dashboard } from './routes';
import { NavItem } from './types';

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Users',
        href: '#',
        icon: User,
        isActive: false,
        subItems: [
            {
                title: 'user1',
                href: '#',
            },
            {
                title: 'user2',
                href: '#',
            },
        ],
    },
];

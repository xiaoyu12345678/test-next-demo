'use client';

import type { Item } from '../tabGroup';
import clsx from 'classnames';
import Link from 'next/link';

export const Tab = ({ name, item }: { name: string; item: Item }) => {
    const href = '/router2/router22?=' + item.name;
    const isActive = item.name === name;

    console.info('href', href);
    return (
        <Link
            href={href}
            prefetch={true}
            className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
                'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
                    !isActive,
                'bg-vercel-green text-white': isActive,
            })}
        >
            {item.title}
        </Link>
    );
};

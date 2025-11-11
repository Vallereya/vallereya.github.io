import { derived, type Readable } from 'svelte/store';
import { page } from '$app/stores';
import type { Page } from '@sveltejs/kit';

const routeTitles: Record<string, string> = {
    '/': 'Vallereya',
    '/about': 'Vallereya | About'
};

function formatPath(pathname: string): string {
    if (pathname === '/' || !pathname) return 'Vallereya';

    const last = pathname
        .replace(/\/+$/, '')
        .split('/')
        .filter(Boolean)
        .pop() || '';

    const pretty = last.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

    return `Vallereya | ${pretty}`;
}

export const title: Readable<string> = derived(page, ($page: Page) => {
    const fromData = $page?.data?.title as string | undefined;

    if (fromData) return fromData;
    const mapped = routeTitles[$page?.url?.pathname];

    if (mapped) return mapped;

    if (!$page?.url) return 'Vallereya';

    return formatPath($page?.url?.pathname || '/');
});

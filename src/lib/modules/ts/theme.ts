import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export type ThemeMode = 'dark' | 'light';

function systemPrefersDark(): boolean {
    return browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readCookie(): ThemeMode | null {
    if (!browser) return null;
    const m = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/);
    return (m ? m[1] : null) as ThemeMode | null;
}

function readSaved(): ThemeMode | null {
    if (!browser) return null;
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === 'light' ? (saved as ThemeMode) : null;
}

function pickInitial(): ThemeMode {
    if (!browser) return 'light';

    const cookie = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/)?.[1];
    if (cookie === 'dark' || cookie === 'light') return cookie;

    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;

    return systemPrefersDark() ? 'dark' : 'light';
}

export const theme: Writable<ThemeMode> = writable<ThemeMode>(pickInitial());

function normalize(mode: string | ThemeMode): ThemeMode {
    return mode === 'dark' || mode === 'light' || mode === 'light' ? mode : 'light';
}

if (browser) {
    const root = document.documentElement;

    const apply = (mode: ThemeMode): void => {
        const value: ThemeMode = mode === 'dark' ? 'dark' : 'light';

        root.classList.remove('dark', 'light');
        root.classList.add(value);

        if (localStorage.getItem('theme') !== value) {
            localStorage.setItem('theme', value);
        }

        const secure = location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `theme=${value}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    };

    apply(pickInitial());

    const unsubscribe = theme.subscribe(apply);

    const onStorage = (e: StorageEvent): void => {
        if (e.key === 'theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
            theme.set(e.newValue);
        }
    };
    window.addEventListener('storage', onStorage);

    const userHasChoice = (): boolean => {
        const cookie = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/)?.[1];
        const saved = localStorage.getItem('theme');
        return cookie === 'dark' || cookie === 'light' || saved === 'dark' || saved === 'light';
    };

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMq = (e: MediaQueryListEvent): void => {
        if (!userHasChoice()) theme.set(e.matches ? 'dark' : 'light');
    };

    mq.addEventListener?.('change', onMq);

    import.meta.hot?.dispose(() => {
        unsubscribe();
        window.removeEventListener('storage', onStorage);
        mq.removeEventListener?.('change', onMq);
    });
}

export function toggleTheme(): void {
    theme.update((m) => (m === 'dark' ? 'light' : 'dark'));
}

export function setTheme(mode: ThemeMode | string): void {
    theme.set(normalize(mode));
}

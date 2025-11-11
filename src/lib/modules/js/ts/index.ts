(() => {
    try {
        const match = document.cookie.match(/(?:^|;\s*)theme=(dark|light)/);
        const saved: string | null = match ? match[1] : localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial: 'dark' | 'light' = (saved as 'dark' | 'light') || (prefersDark ? 'dark' : 'light');
        const root: HTMLElement = document.documentElement;

        root.classList.remove('dark', 'light');
        root.classList.add(initial);
    } catch (e) {
        console.error(e);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const copyrightYearElement = document.getElementById('copyright-year');
    if (copyrightYearElement) {
        const currentYear = new Date().getFullYear();
        copyrightYearElement.textContent = currentYear.toString();
    }
});

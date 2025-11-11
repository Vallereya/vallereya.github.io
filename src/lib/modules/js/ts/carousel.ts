/**
    * The Auto-Scrolling Image Carousel.
    * @param selector  - CSS selector or element reference for the carousel track itself.
    * @param speed     - Pixels moved per frame (default: 0.5).
*/

function initCarousel(selector: string | HTMLElement, speed: number = 0.5): void {
    if (typeof window === 'undefined') return;

    const track =
        typeof selector === 'string'
            ? (document.querySelector(selector) as HTMLElement | null)
            : selector;

    if (!track) {
        console.warn(`[carousel] No element found for selector: ${selector}`);
        return;
    }

    track.innerHTML += track.innerHTML;
    let x = 0;

    function animate(): void {
        x -= speed;

        if (Math.abs(x) >= track.scrollWidth / 2) {
            x = 0;
        }

        track.style.transform = `translateX(${x}px)`;

        track.style.willChange = 'transform';
        requestAnimationFrame(animate);
    }
    animate();
}

export default initCarousel

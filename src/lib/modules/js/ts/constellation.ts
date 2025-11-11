export interface ConstellationOptions {
    starColor?: string;
    lineColor?: string;
    starCount?: number;
    maxVelocity?: number;
    connectionDistance?: number;
    mouseRadius?: number;
    restingStarOpacity?: number;
    highlightStarOpacity?: number;
}

interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

const clamp = (value: number, min: number, max: number): number =>
    Math.max(min, Math.min(max, value));

export function constellation(
    canvas: HTMLCanvasElement,
    options: ConstellationOptions = {}
): { destroy: () => void; setColors: (star: string, line: string) => void } {
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        return {
            destroy: () => {},
            setColors: () => {}
        };
    }

    const config = {
        starCount: 80,
        maxVelocity: 0.3,
        connectionDistance: 130,
        mouseRadius: 150,
        restingStarOpacity: 0.55,
        highlightStarOpacity: 0.95,
        ...options
    };

    const restingStarOpacity = clamp(config.restingStarOpacity ?? 0.55, 0, 1);
    const highlightStarOpacity = clamp(
        config.highlightStarOpacity ?? 0.95,
        restingStarOpacity,
        1
    );
    const starOpacityRange = highlightStarOpacity - restingStarOpacity;

    let starColor = options.starColor;
    let lineColor = options.lineColor;

    function setColors(star: string, line: string) {
        starColor = star;
        lineColor = line;
    }


    // For Mobile
    if (window.innerWidth < 700) {
        config.starCount = Math.min(config.starCount, 30);
        config.connectionDistance = Math.min(config.connectionDistance, 80);
    }

    const stars: Star[] = [];
    const mouse = { x: null as number | null, y: null as number | null };
    let animationFrameId = 0;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();

    function createStars() {
        stars.length = 0;
        for (let i = 0; i < config.starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * config.maxVelocity,
                vy: (Math.random() - 0.5) * config.maxVelocity,
                size: 1 + Math.random()
            });
        }
    }
    createStars();

    function updateStar(star: Star) {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
            const dx = star.x - mouse.x;
            const dy = star.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < config.mouseRadius) {
                star.x += dx * 0.01;
                star.y += dy * 0.01;
            }
        }
    }

    function mouseInfluence(x: number, y: number): number {
        if (mouse.x === null || mouse.y === null) return 0;

        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= config.mouseRadius) return 0;

        return 1 - dist / config.mouseRadius;
    }

    function drawStar(star: Star) {
        const influence = mouseInfluence(star.x, star.y);
        const opacity = restingStarOpacity + starOpacityRange * influence;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.fill();
        ctx.restore();
    }

    function drawLines() {
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const a = stars[i];
                const b = stars[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < config.connectionDistance) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        if (mouse.x !== null && mouse.y !== null) {
            for (const s of stars) {
                const dx = s.x - mouse.x;
                const dy = s.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < config.mouseRadius) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(s.x, s.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const s of stars) {
            updateStar(s);
            drawStar(s);
        }
        drawLines();
        animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
        resize();
        createStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return {
        destroy() {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        },
        setColors
    };
}

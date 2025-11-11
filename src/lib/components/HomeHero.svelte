<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '$ts/theme';
    import { constellation } from '$ts/constellation';
    import { get } from 'svelte/store';
    import { Button } from 'bits-ui';

    $: isDark = $theme === 'dark';
    $: isLight = $theme === 'light';

    // Hero Background Videos
    // import BackgroundVideoLight from '$videos/hero-bg.mp4';
    // import BackgroundVideoDark from '$videos/hero-bg.mp4';

    // Hero Background Images
    // import BackgroundImageLight from '$images/hero-bg.svg';
    // import BackgroundImageDark from '$images/hero-bg.svg';

    // Hero Carousel Images
    // const CarImg1 = '$images/..';
    // const CarImg2 = '$images/..';
    // const CarImg3 = '$images/..';
    // const CarImg4 = '$images/..';
    // const CarImg5 = '$images/..';
    // const CarImg6 = '$images/..';

    // Hero Logo
    // import TypeLogo from '$logos/dragonstone-type.png';

    // Hero Background Grain
    // import BackgroundGrain from '$images/grain.gif';

    // Hero Constellation
    // let canvasConstellation: HTMLCanvasElement;

    // let api: { 
    //     destroy: () => void; 
    //     setColors: (star: string, line: string) => void 
    // } | null = null;

    // function getColors(mode: 'light' | 'dark') {
    //     const root = getComputedStyle(document.documentElement);
        
    //     if (mode === 'dark') {
    //         const txt = root.getPropertyValue('').trim();
    //         const bg = root.getPropertyValue('').trim();
    //         return { 
    //             star: bg || 'oklch(0.8373 0 0)',
    //             line: txt || 'oklch(0.8373 0 0 / 75%)'
    //         };
    //     } else {
    //         const txt = root.getPropertyValue('').trim();
    //         const bg = root.getPropertyValue('').trim();
    //         return { 
    //             star: bg || 'oklch(0.2267 0 0)',
    //             line: txt || 'oklch(0.2267 0 0 / 75%)'
    //         };
    //     }
    // }

    // onMount(() => {
    //     const initialMode = get(theme) as 'light' | 'dark';
    //     const initial = getColors(initialMode);

    //     // Here be the custom options to set.
    //     api = constellation(canvasConstellation, {
    //         starColor: initial.star,
    //         lineColor: initial.line,
    //         restingStarOpacity: 0.25,
    //         highlightStarOpacity: 1.0,
    //         mouseRadius: 120
    //     });

    //     const unsub = theme.subscribe(($theme) => {
    //         if (!api) return;

    //         requestAnimationFrame(() => {
    //             const { star, line } = getColors($theme as 'light' | 'dark');
    //             api!.setColors(star, line);
    //         });
    //     });

    //     return () => {
    //         api?.destroy();
    //         unsub();
    //     };
    // });
</script>

<hero id="hero">
    <!-- Hero Background -->
    <div class="hero-bg-container">
        <div class="hero-bg hero-bg-grid">
            <!--
            <video class="hero-bg-container-video-light" src={BackgroundVideoLight} autoplay loop muted width="1440" height="880"> </video>
            <video class="hero-bg-container-video-dark" src={BackgroundVideoDark} autoplay loop muted width="1440" height="880"> </video>
            <img class="hero-bg-container-image-light" src={BackgroundImageLight}> </img>
            <img class="hero-bg-container-image-dark" src={BackgroundImageDark}> </img>
            -->
        </div>
        <!-- <canvas bind:this={canvasConstellation}
            class="constellation" 
            id="constellation" 
            width="1817" 
            height="607"
            >
        </canvas> -->
        <canvas class="hero-bg-container-grain" width="848" height="607">
            <!--
            <img src={BackgroundGrain} alt="" class="hero-bg-container-img-grain" loading="eager" width="1440" height="880"/>
            -->
        </canvas>
    </div>
    <!-- Hero Section -->
    <div class="hero">
        <div class="hero-contain">
            <div class="hero-text hero-container">
                <!-- Hero Caption -->
                <!--
                <aside class="hero-caption">
                    <a href="/#" class="hero-caption-button">
                        Placeholder
                        <Button.Root>
                            <span>
                                Placeholder CTA
                            </span>
                        </Button.Root>
                    </a>
                </aside>
                -->
                <!-- Hero Logo -->
                <!--
                <div class="flex flex-row w-1/2">
                    <img src={TypeLogo} alt="dragonstone" class="hero-bg-container-img-logo"/>
                </div>
                -->
                <!-- Hero Title -->
                <div class="hero-head-title">
                    <h1>
                        Hi! 👋
                    </h1>
                    <h2>
                        This is my personal website.
                    </h2>
                </div>
                <!-- Hero Paragraph -->
                <div class="hero-head-paragraph">
                    <p>
                        (Under Construction)
                    </p>
                </div>

                <!-- Hero Action Button -->
                <!--
                <div class="hero-action">
                    <a href="/start" class="hero-action-button">
                        <Button.Root>
                            <span>
                                Get Started →
                            </span>
                        </Button.Root>
                    </a>
                </div>
                -->

                <!-- Hero Carousel -->
                <!--
                <aside class="hero-carousel-container">
                    <div class="contain">
                        <div class="hero-carousel-text">
                            Thank You to Our Sponsors
                        </div>
                    </div>
                    <div class="hero-carousel">
                        <div class="hero-carousel-group">
                            <img src={CarImg1} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg2} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg3} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg4} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg5} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg6} alt="Sponsor" loading="eager" width="150" height="50">
                        </div>
                        <div class="hero-carousel-group">
                            <img src={CarImg1} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg2} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg3} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg4} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg5} alt="Sponsor" loading="eager" width="150" height="50">
                            <img src={CarImg6} alt="Sponsor" loading="eager" width="150" height="50">
                        </div>
                    </div>
                </aside>
                -->
            </div>
        </div>
    </div>
</hero>

<style>
    hero {
        margin:                             0;
        padding:                            0;
    }

    .hero {
        height:                             100%;
        width:                              100%;
    }

    .hero::before {
        content:                            "";
        position:                           absolute;
        top:                                0;
        bottom:                             0;
        width:                              100%;
        height:                             100%;
        z-index:                            var(--z-index-bg-layer);
    }

    .hero-bg-container {
        z-index:                            var(--z-index-bg-art);
        contain:                            style;
    }
    
    .hero-bg, 
    .hero-bg-grid {
        z-index:                            var(--z-index-bg-art);
        contain:                            style;
    }

    .hero-bg-grid {
        z-index:                            var(--z-index-bg-art);
        pointer-events:                     none;
        position:                           absolute;
        top:                                0;
        width:                              100vw;
        height:                             100%;
        content-visibility:                 auto;
        contain-intrinsic-height:           100vh;
        overflow:                           hidden;
    }

    /* If The Hero Background Is An Image */
    /*
    .hero-bg-container img {
        width:                              100%;
        height:                             100%;
        contain:                            paint;
        object-fit:                         cover;
        object-position:                    center;
    }
    */

    /* If The Hero Background Is A Video */
    /*
    .hero-bg-container video {
        width:                              100%;
        height:                             100%;
        contain:                            paint;
        object-fit:                         cover;
        object-position:                    center;
    }
    */

    /* Switch Background Video on Light or Dark Mode */
    /*
    .hero-bg-container-video-light,
    .hero-bg-container-video-dark {
        display:                            none;
    }

    html.light .hero-bg-container-video-light {
        display:                            block;
        filter:                             grayscale(100%) brightness(100%) invert(100%);
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }

    html.light .hero-bg-container-video-dark  {
        display:                            none;
    }

    html.dark .hero-bg-container-video-light {
        display:                            none;
    }

    html.dark .hero-bg-container-video-dark  {
        display:                            block;
        filter:                             grayscale(100%) brightness(100%) invert(0%);
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }
    */

    .hero-bg-container canvas {
        width:                              100vw;
        height:                             100%;
        position:                           absolute;
        contain:                            strict;
        isolation:                          isolate;
        top:                                0;
        z-index:                            var(--z-index-default);
        overflow:                           hidden;
        mix-blend-mode:                     color-dodge;
    }

    .hero-bg-container-grain {
        width:                              100%;
        height:                             100%;
        background:                         url('$images/grain.gif');
        opacity:                            0.04;
        contain:                            paint;
        object-fit:                         cover;
        object-position:                    center;
        mix-blend-mode:                     overlay;
        pointer-events:                     none;
        z-index:                            var(--z-index-default);
    }

    /*
    .hero-bg-container-img-grain {
        
    }
    */

    .hero-contain {
        max-width:                          var(--container-contain-padding);
        padding-left:                       max(var(--container-padding),env(safe-area-inset-left));
        padding-right:                      max(var(--container-padding),env(safe-area-inset-left));
        margin-left:                        auto;
        margin-right:                       auto;
    }

    /* .constellation {
        position:                           absolute;
        inset:                              0;
        width:                              100%;
        height:                             100%;
        z-index:                            var(--z-index-default);
        display:                            block;
    } */

    .hero-text, .hero-container {
        width:                              100%;
        height:                             100%;
    } 
     
    /* 
    .hero-text {
        margin-top:                         2.5rem;
        margin-bottom:                      7.5rem;
    } 
    */
    
    .hero-container {
        display:                            grid;
        text-align:                         center;
        place-items:                        center;
    }

    /*
    .hero-caption {
        margin:                             var(--margin-hero-caption);
        width:                              fit-content;
        display:                            flex;
        align-items:                        center;
        gap:                                var(--gap-hero-caption);
        font-size:                          var(--font-link-font-size);
        background:                         oklch(1 0 0 / 5%);
        border:                             1px solid oklch(1 0 0 / 5%);
        padding:                            var(--container-link-padding);
        border-radius:                      var(--border-radius-rounded);
        color:                              var(--txt-secondary);
        letter-spacing:                     var(--paragraph-letter-spacing);
        text-wrap:                          pretty;
        backdrop-filter:                    blur(5px);
        -webkit-backdrop-filter:            blur(5px);
        white-space:                        nowrap;
    }

    .hero-caption-button, 
    .hero-caption a {
        display:                            flex;
        align-items:                        center;
        gap:                                0.250rem;
    }

    .hero-caption-button span {
        color:                              var(--logo-color);
    }

    .hero-caption:hover {
        background:                         var(--border-transparent);
        transition:                         color 0.3s;
    }

    .hero-caption-button:hover span {
        color:                              var(--logo-color-darker-accent);
        transition:                         color 0.3s;
    }
    */

    /*
    .hero-caption:-webkit-any-link, .hero-caption a:-webkit-any-link {
        color:                              -webkit-link;
        cursor:                             pointer;
        text-decoration:                    none;
    }
    */

    /* 
    .hero-caption:hover, 
    .hero-caption a:hover, 
    .hero-caption-button:hover,
    .hero-caption-button span:hover {
        cursor:                             pointer;
    } 
    */

    /*
    .hero-action-button:hover {
        cursor:                             pointer;
    }
    */

    .hero-head-title {
        font-family:                        "Minimo Bold", sans-serif;
        color:                              var(--txt-primary);
        font-weight:                        var(--font-heavy-font-weight);
        font-size:                          var(--font-title-font-size);
        letter-spacing:                     var(--hero-letter-spacing);
        line-height:                        var(--hero-letter-spacing);
        max-width:                          24ch;
        margin-bottom:                      1.5rem;
        text-wrap:                          balance;
        display:                            block;
        margin-block-start:                 0.67em;
        margin-block-end:                   0.67em;
        margin-inline-start:                0;
        margin-inline-end:                  0;
    }

    .hero-head-title h2 {
        font-family:                        "Minimo", sans-serif;
        letter-spacing:                     var(--subtitle-letter-spacing);
        font-size:                          var(--font-subtitle-font-size);
        margin-block-start:                 0.67em;
        margin-block-end:                   0.67em;
    }

    .hero-head-paragraph {
        font-family:                        "Minimo Light", sans-serif;
        letter-spacing:                     var(--title-letter-spacing);
        font-size:                          var(--font-paragraph-font-size);
        line-height:                        var(--font-paragraph-line-height);
        color:                              var(--txt-secondary);
        max-width:                          25rem;
        margin-top:                         0.5rem;
        margin-bottom:                      1rem;
    }

    /*
    .hero-action {
        touch-action:                       manipulation;
        display:                            flex;
        position:                           relative;
        text-align:                         center;
        width:                              fit-content;
        align-items:                        center;
        background:                         var(--gradient);
        border:                             var(--border);
        border-top:                         1px solid var(--highlight);
        box-shadow:                         var(--shadow);
        border-radius:                      var(--border-radius-rounded-edge);
        font-size:                          var(--font-button-font-size);
        font-weight:                        var(--font-medium-font-weight);
        line-height:                        var(--font-paragraph-line-height);
        color:                              var(--txt-primary);
        gap:                                var(--gap-hero-caption);
        padding:                            var(--container-button-padding);
        letter-spacing:                     var(--paragraph-letter-spacing);
        text-wrap:                          pretty;
        backdrop-filter:                    blur(5px);
        -webkit-backdrop-filter:            blur(5px);
        white-space:                        nowrap;
    }
    */

    /*
    .hero-action-button {
        color:                              var(--txt-primary);
    }

    .hero-action-button span {
        display:                            flex;
        align-items:                        center;
        gap:                                var(--gap-hero-caption);
    }

    .hero-action:hover,
    .hero-action-button:hover,
    .hero-action-button:hover span {
        cursor:                             pointer;
    }
    .hero-action:hover {
        background:                         var(--gradient-hover);
        transition:                         color 0.3s;
    }

    .hero-action:hover span, 
    .hero-action-button:hover span {
        color:                              var(--logo-color);
        transition:                         color 0.3s;
    }
    */

    /*
    .hero-button:-webkit-any-link,
    button:-webkit-any-link {
        color:                              -webkit-link;
        cursor:                             pointer;
        text-decoration:                    none;
    }
    */

    /*
    .hero-carousel-container {
        max-width:                          100vw;
        padding-top:                        15rem;
        --size:                             clamp(8rem, 1rem + 32vmin, 10rem);
        --duration:                         30s;
        --scroll-start:                     0;
        --scroll-end:                       calc(-100% - var(--gap));
    }

    .hero-carousel-container .hero-carousel-text {
        text-align:                         center;
        margin:                             0 auto 2.5rem;
        text-wrap:                          balance;
    }

    .hero-carousel {
        display:                            flex;
        user-select:                        none;
        gap:                                var(--gap);
        mask-image:                         linear-gradient(var(--mask-direction, to right), transparent, var(--bg-primary) 20%, var(--bg-primary) 80%, transparent);
    }

    .hero-carousel-text {
        font-family:                        "Minimo Bold", sans-serif;
        letter-spacing:                     var(--title-letter-spacing);
        font-weight:                        var(--font-medium-font-weight);
        line-height:                        var(--font-paragraph-line-height);
        max-width:                          30rem;
        color:                              var(--txt-primary);
        text-wrap:                          pretty;
    }

    .hero-carousel-group {
        opacity:                            0.5;
        margin-bottom:                      5.5rem;
        margin-left:                        auto;
        margin-right:                       auto;
        flex-shrink:                        0;
        display:                            flex;
        grid-auto-flow:                     column;
        grid-auto-columns:                  1fr;
        align-items:                        center;
        justify-content:                    space-between;
        gap:                                var(--gap);
        max-width:                          var(--container-contain-padding);
        padding-left:                       var(--container-padding);
        padding-right:                      var(--container-padding);
        flex-wrap:                          wrap;
        animation:                          scroll-x var(--duration) linear infinite;
    }

    .hero-carousel-group img {
        width:                              var(--size);
        margin-left:                        auto;
        margin-right:                       auto;
        height:                             50%;
        object-fit:                         contain;
        overflow-clip-margin:               content-box;
        overflow:                           clip;
    }
    */

    /*
    .hero-carousel-group:last-child {
        display:                            none;
    }
    */

        /* Mobile - 360px */

    @media only screen and (min-width: 0rem) {
        #hero {
            margin:                         auto;
            width:                          100%;
            box-sizing:                     border-box;
            overflow:                       hidden;
        }

        #hero .hero-bg-container {
            margin:                         auto;
            width:                          100%;
        }

        #hero .hero {
            margin:                         auto;
            width:                          100%;
        }
    }

    /* Tablet - 768px */
    @media only screen and (min-width: 48rem) {

    }

    /* Small Desktop - 1024px */
    @media only screen and (min-width: 64rem) {

    }
</style>

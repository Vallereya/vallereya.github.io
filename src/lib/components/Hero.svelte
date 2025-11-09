<script lang="ts">
    import '$css/Hero.css';
    import { Button } from 'bits-ui';

    // Hero Background Videos
    // import HeroBackgroundVideoLight from '$videos/hero-background.mp4';
    // import HeroBackgroundVideoDark from '$videos/hero-background.mp4';

    // Hero Background Images
    // import HeroBackgroundImageLight from '$images/hero-background.svg';
    // import HeroBackgroundImageDark from '$images/hero-background.svg';

    // Hero Background Image Grain
    import HeroBackgroundImageGrain from '$images/grain.gif';

    // Hero Carousel Images
    // const imgSrcImg1 = '$logos/../..';
    // const imgSrcImg2 = '$logos/../..';
    // const imgSrcImg3 = '$logos/../..';
    // const imgSrcImg4 = '$logos/../..';
    // const imgSrcImg5 = '$logos/../..';
    // const imgSrcImg6 = '$logos/../..';

</script>

<div class="hero">

    <!-- Hero Background -->
    <div class="hero-background-container">
        <div class="hero-background hero-background-grid">
            <!--
            <video class="hero-background-container-video-light" src={HeroBackgroundVideoLight} autoplay loop muted width="1440" height="880"> </video>
            <video class="hero-background-container-video-dark" src={HeroBackgroundVideoDark} autoplay loop muted width="1440" height="880"> </video>
            -->
        </div>
        <canvas class="hero-background-container-grain" width="848" height="607">
            <img src={HeroBackgroundImageGrain} alt="" class="hero-background-container-img-grain" loading="eager" width="1440" height="880"/>
        </canvas>
    </div>

    <!-- Hero Section -->
     <div class="hero">
        <div class="hero-contain">
            <div class="hero-text hero-container">

                <!-- Hero Caption -->
                <!--
                <aside class="hero-caption">
                    <a href="https://github.com/Vallereya" class="hero-caption-button">
                        Check out my Repositories.
                        <Button.Root>
                                <span>
                                    GitHub →
                                </span>
                        </Button.Root>
                    </a>
                </aside>
                -->

                <!-- Hero Title -->
                <div class="hero-head-title">
                    <h1>
                        Hi!
                    </h1>
                </div>

                <!-- Hero Paragraph -->
                <div class="hero-head-paragraph">
                    <p>
                        under construction
                    </p>
                </div>

                <!-- Hero Action Button -->
                <!--
                <div class="hero-action">
                    <a href="/projects" class="hero-action-button">
                        <Button.Root>
                            <span>
                                Projects →
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
                            Projects by Me
                        </div>
                    </div>
                    <div class="hero-carousel">
                        <div class="hero-carousel-group">
                            <img src={imgSrcImg1} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg2} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg3} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg4} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg5} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg6} alt="" loading="eager" width="150" height="50">
                        </div>
                        <div class="hero-carousel-group">
                            <img src={imgSrcImg1} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg2} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg3} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg4} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg5} alt="" loading="eager" width="150" height="50">
                            <img src={imgSrcImg6} alt="" loading="eager" width="150" height="50">
                        </div>
                    </div>
                </aside>
                -->

            </div>
        </div>
    </div>
</div>

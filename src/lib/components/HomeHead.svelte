<script lang="ts">
    // import { base } from "$app/paths";
    import '$css/HomeHead.css';
    import NavigationBar from "$components/NavigationBar.svelte";
    import Hero from '$components/Hero.svelte';

</script>

<header class="head">
    <div class="home-header-nav-bar">
        <NavigationBar />
    </div>
    <div class="home-header-hero">
        <Hero />
    </div>
    <!-- <a href="{base}/about">About</a> -->
</header>

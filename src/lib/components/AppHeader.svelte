<script lang="ts">
    import Nav from "$components/NavigationBar.svelte";
    import Hero from '$src/lib/components/HomeHero.svelte';
</script>

<header class="header">
    <div class="header-nav-bar">
        <Nav />
    </div>
    <div class="header-hero">
        <Hero />
    </div>
</header>

<style>
    header {
        margin:                             0;
        padding:                            0;
    }
</style>

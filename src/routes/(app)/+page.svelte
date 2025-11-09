<!-- HOMEPAGE GROUP -->
<script lang="ts">
    import HomeHead from '$components/HomeHead.svelte';
    import HomeBody from '$components/HomeBody.svelte';
    import HomeFoot from '$components/HomeFoot.svelte';
</script>

<main class="home">
    <!-- HEAD SECTION -->
    <section class="home-header">
        <HomeHead />
    </section>
    <!-- BODY SECTION -->
    <section class="home-body">
        <HomeBody />
    </section>
    <!-- FOOT SECTION -->
    <section class="home-footer">
        <HomeFoot />
    </section>
</main>

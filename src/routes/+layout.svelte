<script lang="ts">
	import '$src/app.css';
	import favicon from '$icons/v-favicon.png';
    import { title } from '$ts/title';

	// let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon}/>
    <title>
        {$title}
    </title>
</svelte:head>

<slot />

<!-- {@render children()} -->

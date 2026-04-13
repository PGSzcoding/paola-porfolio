<script>
	import favicon from '$lib/assets/favicon.ico';
	import { Footer, Header, ScreenLoading, ScrollToTop } from "$components";
	import "../app.css"
    import { onMount } from 'svelte';
	import  AOS  from "aos";
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import { showScreenLoader } from '$lib/stores/general';
    import { afterNavigate, beforeNavigate } from '$app/navigation';

	let { children } = $props();
	

	onMount(()=>{
		AOS.init({duration: 1000,});
		setTimeout(() => {
			$showScreenLoader = false
		}, 1000);
	})

	afterNavigate(()=>{
		setTimeout(() => {
			$showScreenLoader = false
		}, 1000);

	})

	beforeNavigate(()=>{
		$showScreenLoader = true
	})
</script>

<svelte:head>
	<title>Paola Gutierrez</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $showScreenLoader}
	<ScreenLoading/>
{/if}
<Header/>
<ScrollToTop/>
{@render children()}
<Footer/>
<SvelteToast />
  
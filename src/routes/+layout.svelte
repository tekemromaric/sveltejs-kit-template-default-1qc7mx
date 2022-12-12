<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>W3.CSS Template</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="w3-container w3-black w3-padding-16">
		<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
	</footer>
</div>

<style>
</style>

<script>
	import Componente from './lib/Character.svelte';

	let characters = [];
	let page = 1;
	async function loadCharacters() {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character?page=${page}`
		);
		const data = await response.json();
		characters = data.results;
	}
	loadCharacters();

	function nextPage() {
		page++;
		loadCharacters();
	}

	function previousPage() {
		page--;
		loadCharacters();
	}
</script>

<h1 class="title">API Rick and Morty Svelte</h1>

<div class="container">
	<div class="btns">
		<button on:click={previousPage} disabled={page === 1} class="btn"
			>previous</button
		>
		<button on:click={nextPage} disabled={page > 41} class="btn">next</button>
	</div>
	<div class="grid">
		{#each characters as character}
			<Componente {character} />
		{/each}
	</div>
</div>

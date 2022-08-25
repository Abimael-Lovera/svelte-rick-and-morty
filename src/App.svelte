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

<h1>API Rick and Morty Svelte</h1>

<div>
	<button on:click={previousPage} disabled={page === 1}>previous</button>
	<button on:click={nextPage}>next</button>
</div>

<div class="">
	{#each characters as character}
		<Componente {character} />
	{/each}
</div>

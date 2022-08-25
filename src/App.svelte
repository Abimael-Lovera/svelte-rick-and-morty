<script>
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
		<div>
			<img src={character.image} alt={character.name} />
			<h2>{character.name}</h2>
			<h3>{character.species}</h3>
		</div>
	{/each}
</div>

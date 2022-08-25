<script>
	import { each } from 'svelte/internal';

	let characters = [];
	async function loadCharacters() {
		const response = await fetch('https://rickandmortyapi.com/api/character');
		const data = await response.json();
		characters = data.results;
	}
	loadCharacters();
</script>

<h1>API Rick and Morty Svelte</h1>

<div>
	<button>previous</button>
	<button>next</button>
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

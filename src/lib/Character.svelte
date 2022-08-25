<script>
	export let character;
</script>

<div>
	<img src={character.image} alt={character.name} />
	<h2>{character.name}</h2>
	<h3>{character.species}</h3>
</div>

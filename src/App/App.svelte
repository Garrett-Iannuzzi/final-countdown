<script>
	import Form from '../Form/Form.svelte';
	import WordContainer from '../WordContainer/WordContainer.svelte';

  const url = '01672bcc-913a-4964-b9c5-2f4cafa8ca78';
	const greeting = 'Welcome to Sexy Synonyms';
  let searchResults = [];
  let searchWord = '';

	  const findSynonyms = (async () => {
			const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchWord}?key=${url}`)
			const data = await response.json();
			const fullSynonyms = data.map(object => {
				return object.meta.syns
    })
			const returnedWords = await fullSynonyms[0].flat();
			searchResults = returnedWords;
			console.log(searchResults)
  });
</script>

<main>
	<h1>Hello, {greeting}!</h1>
	<p>Use this application to search for a word, you will receive a list of synonyms in button form, 
		if you click you will get a new list, happy learning!</p>
	<Form />
	{#if !searchResults.length}
		<p>Search for a word</p>
	{:else}
		<WordContainer />
	{/if}
</main>

<style>
	main {
		text-align: center;
		height: 100vh;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		width: 100%;
	}

	h1 {
		color: lightcoral;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	p {
		font-size: 1.3em;
		margin: 0 auto;
		width: 50%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
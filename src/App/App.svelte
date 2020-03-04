<script>
	import Form from '../Form/Form.svelte';
	import WordContainer from '../WordContainer/WordContainer.svelte';

	const url = '01672bcc-913a-4964-b9c5-2f4cafa8ca78';
	const src = '../images/info.png';
  let searchResults = [];
	let word = '';
	let isLoading = '';

	const findSynonyms = (async (e) => {
		word = e.detail;
		isLoading = '...loading'
		const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${url}`)
		const data = await response.json();
		isLoading = '';
		const fullSynonyms = data.map(object => {
			return object.meta.syns
    })
		const returnedWords = await fullSynonyms[0].flat();
		searchResults = returnedWords;
  });
</script>

<main>
	<div class='tool-tip'>
		<img {src} alt='Information Icon' class='img'>
		<span class='h3-tooltip'>
			Search for a word and you will receive a list of synonyms in BUTTON form, 
			if you click you will get a new list, happy learning!
		</span>
	</div>
	<h1>Hello, Welcome to Sexy Synonyms!</h1>
	<Form on:submitword={findSynonyms} />
	{#if searchResults.length}
		<WordContainer word={word} searchResults={searchResults}/>
	{:else}
		<p class='p-h2'>Have Fun!</p>
	{/if}
	{#if isLoading}
		<p class='p-loading-main'>{isLoading}</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		width: 100%;
	}

	.tool-tip {
		margin: 0 auto;
		width: 100%;
	}
	
	.img {
		cursor: help;
		height: 250px;
		width: 250px;
	}

	.h3-tooltip {
		border: solid 5px lightcoral;
		border-radius: 15px;
		font-size: 1.5em;
		margin-left: 2em;
		visibility: hidden;
		position: absolute;
		padding: .7em;
		width: 20%;
		z-index: 1;
	}

	h1 {
		color: lightcoral;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	.p-h2 {
		font-size: 2em;
		font-weight: bold;
		margin: 0 auto;
		width: 50%;
	}

	.p-loading-main {
    font-size: 4em;
		margin-top: 2em;
	}
	
	.tool-tip:hover .h3-tooltip {
		visibility: visible;
	}

	.img:hover {
		transform: rotate(220deg);
		transition: 7s;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
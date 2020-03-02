<script>
	import Form from '../Form/Form.svelte';

	const greeting = 'Welcome to Sexy Synonyms';

</script>

<main>
	<h1>Hello, {greeting}!</h1>
	<p>Use this application to search for a word, you will receive a list of synonyms in button form, 
		if you click you will get a new list, happy learning!</p>
	<Form />
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
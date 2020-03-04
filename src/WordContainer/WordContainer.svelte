<script>  
  import WordBtn from '../WordBtn/WordBtn.svelte';

  const url = '01672bcc-913a-4964-b9c5-2f4cafa8ca78';
  export let word;
  export let searchResults;
  let isLoading = ''

  const findSynonyms = (async (e) => {
    word = e.detail;
    isLoading = '...loading';
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${url}`)
    const data = await response.json();
    isLoading = ''
    const fullSynonyms = data.map(object => {
      return object.meta.syns
    })
    const returnedWords = await fullSynonyms[0].flat();
    searchResults = returnedWords;
  });

  const handleSubmit = e => {
    e.preventDefault()
    findSynonyms()
  }

</script>


<section >  
  <h2>SYNONYMS FOR: <span data-testid='span-word'>{word}</span></h2>
    {#if isLoading}
      <p class='p-loading'>{isLoading}</p>
    {:else}
      {#each searchResults as secondWord}
        <WordBtn on:getNextSynonym={findSynonyms} secondWord={secondWord}/>
      {/each}
    {/if}
</section>

<style>

  section {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    width: 100%;
  }

  h2 {
    font-size: 3.5em;
    font-weight: bold;
    border-bottom: solid 2px lightcoral;
    padding-bottom: .5em;
    text-transform: uppercase;
    width: 98%;
  }

  .p-loading {
    font-size: 4em;
  }

  span {
    color: lightcoral;
  }

</style>
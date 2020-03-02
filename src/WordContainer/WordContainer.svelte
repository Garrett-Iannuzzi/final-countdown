<script>
  export let firstSearchedWord;
  export let searchResults;
</script>


<section >  
    <h2>{ firstSearchedWord || 'Have Fun!' }</h2>
    {#each searchResults as searchResults}
      <button type='button'>{searchResults}</button>
    {/each}
</section>


<style>

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
  }

</style>
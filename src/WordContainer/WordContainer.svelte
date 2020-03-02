<script>
  export let word;
  export let searchResults;

</script>


<section >  
  <h2>{ word }</h2>
    {#each searchResults as searchResults}
      <button type='button'>{searchResults}</button>
    {/each}
</section>

<style>

  section {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  h2 {
    font-size: 2.5em;
    font-weight: bold;
    border-bottom: solid 2px lightcoral;
    padding-bottom: .5em;
    text-transform: uppercase;
    width: 98%;
  }

  button {
    cursor: pointer;
    color: lightcoral;
    height: 3.5em;
    margin: 1em;
    width: 28%
  }

  button:hover {
    border-color: black;
    color: black;
    background-color: lightcoral;
  }

</style>
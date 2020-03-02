<script>

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let searchWord = '';

  const onSubmit = e => {
    e.preventDefault();
    searchWord = '';
  };

</script>


<form >  
  <input type='text' placeholder='Enter A Word' bind:value={searchWord}/>
  <button on:click={onSubmit}>Click me</button>
</form>

  <!-- <h2>{ searchWord || 'Have Fun!' }</h2>
    {#if !searchResults.length}
    <p>Nothing yet...</p>
  {:else}
    {#each searchResults as searchResults}
      <button type='button'>{searchResults}</button>
    {/each}
  {/if} -->

<style>

  form {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    overflow: scroll;
  }

  input {
    text-transform: uppercase;
    height: 3em;
    width: 25%;
  }

  button {
    cursor: pointer;
    margin-top: .5em;
    width:25%;
  }

  h2 {
    text-transform: uppercase;
    border-bottom: solid 2px lightcoral;
    margin-top: 1.5em;
    padding-bottom: .8em;
    width: 98%;
  }

  p {
    font-size: 1.3em;
  }
  
</style>
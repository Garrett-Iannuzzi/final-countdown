<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let secondWord;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch('getNextSynonym', secondWord)
  }
</script>

<button on:click={handleSubmit}>{secondWord}</button>

<style>

  button {
    cursor: pointer;
    color: lightcoral;
    height: 3.5em;
    font-weight: bold;
    margin: 1em;
    width: 28%
  }

  button:hover {
    border-color: black;
    color: black;
    background-color: lightcoral;
  }

</style>
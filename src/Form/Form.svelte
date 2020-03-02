<script>

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let firstSearchedWord = '';

  const onSubmit = e => {
    e.preventDefault();
    dispatch('submitword', firstSearchedWord)
    firstSearchedWord = '';
  };

</script>


<form >  
  <input type='text' placeholder='Enter A Word' bind:value={firstSearchedWord}/>
  <button type='submit' on:click={onSubmit}>Click me</button>
</form>


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
  
</style>
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
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    overflow: scroll;
  }

  input {
    border-radius: .0 .5em .5em 0;
    text-transform: uppercase;
    margin-right: 10em;
    height: 3em;
    width: 25%;
  }

  button {
    border-radius: .5em 0 0 .5em;
    cursor: pointer;
    height: 3em;
    margin-top: .5em;
    margin-left: 10em;
    margin-bottom: 2em;
    width:25%;
  }

  button:hover {
    border-color: black;
    color: black;
    background-color: lightcoral;
  }

  
</style>





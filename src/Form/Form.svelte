<script>
  const url = '01672bcc-913a-4964-b9c5-2f4cafa8ca78';

  let searchResults = [];
  let searchWord = '';

  const onSubmit = e => {
    e.preventDefault();
    findSynonyms();
    searchWord = '';
  };

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


<form >  
    <input type='text' placeholder='Enter A Word' bind:value={searchWord}/>
  <button on:click={onSubmit}>Click me</button>
  <h2>{ searchWord || 'Have Fun!' }</h2>
</form>


<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
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
</style>
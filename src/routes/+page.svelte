<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Check GPA averages for classes you want to take</p>

<script>
    import Box from './Box.svelte'

    let bgColor = 'primary'
       import { Button, Overlay, ProgressCircular, Icon, MaterialApp } from 'svelte-materialify';
    import { mdiOpenInNew } from '@mdi/js';
  
    let active = false; 
  $: quarter = 'fall';
    $: data = [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Sarah", "sarah@gmail.com", "(01) 22 888 4444"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
    ]
  function springquarter() {
       quarter = 'spring'
        data = [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Sarah", "sarah@gmail.com", "(01) 22 888 4444"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
        ]
  }
  function fallquarter() {
        quarter = 'fall'
        data = [
        ["John1", "john@example.com", "(353) 01 222 3333"],
        ["Sarah2", "sarah@gmail.com", "(01) 22 888 4444"],
        ["Afshin3", "afshin@mail.com", "(353) 22 87 8356"]
        ]
  }
  function winterquarter() {
        quarter = 'winter'
        data = [
        ["John4", "john@example.com", "(353) 01 222 3333"],
        ["Sarah5", "sarah@gmail.com", "(01) 22 888 4444"],
        ["Afshin6", "afshin@mail.com", "(353) 22 87 8356"]
    ]
  }
    function addRow() {
        data = [...data, [...newRow]]
        newRow = columns
    }
    function deleteRow(rowToBeDeleted) {
        data = data.filter(row => row != rowToBeDeleted)
    }
    function graphs() {
        
    }
    let columns = ["Name", "Email", "Phone Number"]
    let newRow = [...columns];
</script>


<!-- <img src="/src/lib/images/{randomNumber}" alt="Playing dice" class="dice" /> -->

<p>
    
</p>

<p>
    
</p>

<button on:click={fallquarter} class="btn btn--roll">🎲 Roll dice</button>

<button on:click={winterquarter} class="btn btn--roll">🎲 Roll dice</button>
<button on:click={springquarter} class="btn btn--roll">🎲 Roll dice</button>

<table>
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
		<tr>
			{#each row as cell}
			<td contenteditable="false" bind:innerHTML={cell} on:click={ () => { active = true; }}/>
			{/each}
			<button on:click={() => deleteRow(row)}>X</button>
		</tr>
	{/each}
	<tr style="color: grey">
		{#each newRow as column}
			<td contenteditable="true" bind:innerHTML={column} />
		{/each}
		<button on:click={addRow}>add</button>
	</tr>
	<pre style="background: #eee">{JSON.stringify(data, null, 2)}</pre>
</table>

<p>
    randomNumber: {quarter}
</p>
<MaterialApp>
    <div class="text-center">
      <Button
        class="primary-color"
        on:click={() => {
          active = true;
        }}>
        Launch Application
        <Icon path={mdiOpenInNew} class="ml-2" />
      </Button>
    </div>
    
    <Overlay
      {active}
      on:click={() => {
        active = false;
      }}>
      <ProgressCircular color="white" indeterminate size={128} />
      <label for="bg-color-box">{bgColor}</label>
<input id="bg-color-box" type="color" bind:value={bgColor} />	

<Box width='box' height='100px' bg={bgColor} />
    </Overlay>
    </MaterialApp>
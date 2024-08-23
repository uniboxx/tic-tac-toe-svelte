<script>
  import Player from './Player.svelte';

  let { turns } = $props();
</script>

<ol id="log">
  {#each turns as turn (`${turn.square.row}${turn.square.col}`)}
    <li>{turn.player} selected {turn.square.row},{turn.square.col}</li>
  {/each}
</ol>

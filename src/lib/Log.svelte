<script>
  import { s } from '../assets/state.svelte';
  import Player from './Player.svelte';

  let { turns } = $props();
</script>

<ol id="log">
  {#each turns as turn (`${turn.square.row}${turn.square.col}`)}
    <li>
      {s.players[turn.player]} selected {turn.square.row + 1},{turn.square.col +
        1}
    </li>
  {/each}
</ol>

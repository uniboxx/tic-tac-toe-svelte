<script lang="ts">
  import GameBoard from './lib/GameBoard.svelte';
  import Player from './lib/Player.svelte';
</script>

<main>
  <div id="game-container">
    <ol id="players">
      <Player initialName="Player 1" symbol="X" />
      <Player initialName="Player 2" symbol="O" />
    </ol>
    <GameBoard />
  </div>
</main>

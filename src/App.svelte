<script>
  import GameBoard from './lib/GameBoard.svelte';
  import Player from './lib/Player.svelte';
  import Log from './lib/Log.svelte';
  import { s, PLAYERS } from './assets/state.svelte';
  import GameOver from './lib/GameOver.svelte';
</script>

<main>
  <div id="game-container">
    <ol id="players" class="highlight-player">
      <Player
        initialName={PLAYERS.X}
        symbol="X"
        isActive={s.activePlayer === 'X'} />
      <Player
        initialName={PLAYERS.O}
        symbol="O"
        isActive={s.activePlayer === 'O'} />
    </ol>
    {#if s.winner || s.hasDraw}
      <GameOver />
    {/if}
    <GameBoard />
  </div>
  <Log turns={s.gameTurns} />
</main>

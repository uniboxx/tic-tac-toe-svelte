<script>
  import { s } from '../assets/state.svelte';
  const message = `${s.winner ? s.winner + ' won!' : "It's a draw!"}`;
</script>

<div id="game-over">
  <h2>Game Over!</h2>

  <p>{message}</p>
  <p>
    <button onclick={s.handleRestart}>Rematch!</button>
  </p>
</div>

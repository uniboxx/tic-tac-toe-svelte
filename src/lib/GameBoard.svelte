<script>
  import { s } from '../assets/state.svelte';
  // $inspect(s.gameBoard);
</script>

<ol id="game-board">
  {#each s.gameBoard as row, rowIdx (rowIdx)}
    <li>
      <ol>
        {#each row as playerSymbol, colIdx (colIdx)}
          <li>
            <button
              onclick={() => s.handleSelectSquare(rowIdx, colIdx)}
              disabled={playerSymbol !== null}>{playerSymbol}</button>
          </li>
        {/each}
      </ol>
    </li>
  {/each}
</ol>

<style lang="scss">
  @use '../styles/vars';

  #game-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
    padding: 0;
    flex-direction: column;
  }

  #game-board ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  #game-board button {
    width: 8rem;
    height: 8rem;
    border: none;
    background: #aca788;
    color: #3f3b00;
    font-size: 5rem;
    cursor: pointer;
    font-family: 'Caprasimo', cursive;
    padding: 1rem;
    &:disabled {
      cursor: not-allowed;
      // opacity: 0.7;
    }
  }
</style>

<script>
  import { s } from '../assets/state.svelte';
  let { initialName, symbol, isActive } = $props();
  let isEditing = $state(false);
  let name = $state(initialName);
  let btnCaption = $derived.by(() => (!isEditing ? 'Edit' : 'Save'));

  function handleEditClick() {
    isEditing = !isEditing;
  }
</script>

<li class={isActive ? 'active' : ''}>
  <span class="player">
    {#if !isEditing}
      <span class="player-name">{name}</span>
    {:else}
      <input type="text" bind:value={name} required />
    {/if}
    <span class="player-symbol">{symbol}</span>
    <button onclick={handleEditClick}>{btnCaption}</button>
  </span>
</li>

<style lang="scss">
  @use '../styles/vars';

  .player {
    border: 2px solid transparent;
    padding: 0.5rem;
    border-radius: 4px;
    font-weight: bold;
  }

  .player-name {
    display: inline-block;
    width: 10rem;
    font-size: 1rem;
    color: #e1dec7;
    text-transform: uppercase;
    margin: 0;
    padding: 0.5rem;
    border-radius: 4px;
    text-overflow: ellipsis;
    text-align: center;
  }

  .player input {
    font: inherit;
    font-size: 1rem;
    width: 10rem;
    border: none;
    padding: 0.5rem;
    animation: pulse-text 2s infinite;
    background-color: #46432f;
    text-align: center;
    text-transform: uppercase;
  }

  .player-symbol {
    margin-left: 1rem;
    font-size: 1rem;
    color: #e1dec7;
  }

  @keyframes pulse-text {
    0% {
      color: #e1dec7;
    }
    50% {
      color: #9f9d83;
    }
    100% {
      color: #e1dec7;
    }
  }
</style>

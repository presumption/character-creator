<script lang="ts">
  import Vault from "./vault/Vault.svelte";
  import Character from "./character/Character.svelte";
</script>


<style lang="less">
  @import "./lib/vars.less";

  .app {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
  }

  .vault {
    width: 50rem;
    border-right: 4px solid var(--color-base-3);
  }

  .character {
    flex-grow: 1;
    padding: 10px 30px;
  }
</style>

<div class="app theme-light">
  <div class="vault">
    <Vault/>
  </div>
  <div class="character">
    <Character/>
  </div>
</div>

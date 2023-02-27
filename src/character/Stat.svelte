<script lang="ts">
  export let label: number;
  export let value: number;
</script>

<div class="character-stat">
  <label>{label}</label>
  <input value="{value}"/>
  <div>1</div>
  <div>2</div>
</div>

<style lang="less">
  @import "../lib/vars";
  @import "../lib/text-input";

  .character-stat {
    border: @space0 solid var(--color-base-3);
  }

  input {
    background-color: transparent;
  }
</style>

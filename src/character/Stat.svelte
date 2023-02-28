<script lang="ts">
  export let label: number;
  export let value: number;

  let hard = value / 2;
  let extreme = value / 5;
</script>

<div class="character-stat">
  <label>{label}</label>
  <div class="character-stat-values">
    <input value="{value}"/>
    <div class="character-stat-values-hard-extreme">
      <div class="character-stat-value-hard">{hard}</div>
      <div class="character-stat-value-extreme">{extreme}</div>
    </div>
  </div>
</div>

<style lang="less">
  @import "../lib/text-input";

  @height: 4rem;

  .character-stat {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
  }

  .character-stat-values {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: 2px solid var(--color-base-5);
  }

  .character-stat-values-hard-extreme {
    display: flex;
    flex-flow: column nowrap;
  }

  .character-stat-value-hard {
    .hard-extreme-values();
    border-bottom: 2px solid var(--color-base-5);
  }

  .character-stat-value-extreme {
    .hard-extreme-values();
  }

  .hard-extreme-values() {
    text-align: center;
    width: 2em;
    line-height: @height/2;
    flex-grow: 1;
  }

  label {
    font-size: 1.8rem;
    text-transform: uppercase;
    line-height: calc(@height + 2px);
    margin-right: 6px;
    width: 3em;
    text-align: right;
    color: var(--color-base-contrast-subtle);
  }

  input {
    background-color: transparent;
    color: var(--color-base-contrast);
    font-size: 1.8rem;
    width: @height*1.2;
    line-height: @height;
    height: @height;
    margin: 0;
    padding: 0;
    outline: none;
    border:none;
    border-right: 2px solid var(--color-base-5);
    text-align: center;
  }
</style>

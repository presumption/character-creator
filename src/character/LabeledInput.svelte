<script lang="ts">
  export let label: string;
  export let value: string;
  export let type_: string;

  if (!label) {
    label = "Input";
  }
  if (!value) {
    value = "";
  }
  if (!type_) {
    type_ = "text";
  }

  const id = label.replace(/[^a-z0-9]/g, "_").toLowerCase();
</script>

<label for="{id}">{label}</label>
<input id="{id}" type="{type_}"
       value="{value}"/>

<style lang="less">
  @import "../lib/text-input";

  input {
    .text-input();
    background-color: transparent;
  }

  label {
    padding-right: 2px;
    font-variant: petite-caps;
    color: hsl(0, 0%, 45%);
    line-height: 1.7em;
  }
</style>

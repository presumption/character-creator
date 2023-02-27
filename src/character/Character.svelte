<script lang="ts">
  import LabeledInput from "./LabeledInput.svelte";
  import Stat from "./Stat.svelte";

  interface Character {
    name: string;
    player: string;
    occupation: string;
    age: number;
    pronouns: string;
    residence: string;
    birthplace: string;

    str: number;
    con: number;
    siz: number;
    dex: number;
    app: number;
    int: number;
    pow: number;
    edu: number;
    move: number;
  }

  const character: Character = {
    name: "Jessica Doe",
    player: "Jane",
    occupation: "Librarian",
    age: 23,
    pronouns: "she/her",
    residence: "Arkham, Massachusetts",
    birthplace: "Hungary",

    str: 50,
    con: 50,
    siz: 50,
    dex: 50,
    app: 50,
    int: 50,
    pow: 50,
    edu: 50,
    move: 50
  };
  console.log(character);
</script>


<div class="character-border">
  <div class="character-sheet">
    <div class="character-top-row">
      <div class="character-bio">
        <h1>Investigator</h1>
        <div class="character-section-row">
          <LabeledInput label="Name" value="{character.name}"/>
        </div>
        <div class="character-section-row">
          <LabeledInput label="Player" value="{character.player}"/>
        </div>
        <div class="character-section-row">
          <LabeledInput label="Occupation" value="{character.occupation}"/>
        </div>
        <div class="character-section-row">
          <LabeledInput label="Age" value="{character.age}" type_="number"/>
          <LabeledInput label="Pronouns" value="{character.pronouns}"/>
        </div>
        <div class="character-section-row">
          <LabeledInput label="Residence" value="{character.residence}"/>
        </div>
        <div class="character-section-row">
          <LabeledInput label="Birthplace" value="{character.birthplace}"/>
        </div>
      </div>
      <div class="character-stats">
        <h1>Stats</h1>
        <div class="character-stats-row">
          <Stat label="STR" value="{character.str}"/>
          <Stat label="DEX" value="{character.dex}"/>
          <Stat label="POW" value="{character.pow}"/>
        </div>
      </div>
      <div class="character-portrait">Portrait</div>
    </div>
  </div>
</div>


<style lang="less">
  @import "../lib/vars";
  @import "../lib/text-input";

  .character-border {
    border: @space3 solid var(--color-base-5);
    width: 100%;
    height: 100%;
    padding: @space0;
  }

  .character-sheet {
    border: @space0 solid var(--color-base-5);
    width: 100%;
    height: 100%;
    padding: @space2;

    .character-top-row {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      column-gap: @space3;
    }
  }

  .character-bio {
    .character-section();
    flex-grow: 0;

    display: flex;
    flex-flow: column nowrap;
  }

  .character-stats {
    .character-section();
    flex-grow: 1;
  }

  .character-portrait {
    .character-section();
    width: 20rem;
    flex-grow: 0;
  }

  .character-section() {
    border: @space0 solid var(--color-base-3);
    row-gap: @space2;

    h1 {
      text-align: center;
      background-color: var(--color-base-3);
      margin: 0;
      line-height: 1.3em;
      font-size: 2rem;
      font-variant: petite-caps;
    }
  }

  .character-section-row {
    padding: 0 @space2;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
  }

  .character-stats-row {
    margin: @space2 0;
    padding: 0 @space2;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
  }
</style>

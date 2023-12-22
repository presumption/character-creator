import * as styles from "./page.module.less";
import CharacterSheet from "~/src/character_sheet";

const Page = () => {
  return (
    <div class={styles.page}>
      <CharacterSheet/>
    </div>
  );
};

export default Page;

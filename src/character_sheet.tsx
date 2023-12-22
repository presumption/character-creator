import * as styles from "./character_sheet.module.less";
import {JSX} from "solid-js";

const Bio = () => {
  const row = (element: JSX.Element) => {
    return (
      <div class={styles.sheet_bio_row}>
        {element}
      </div>);
  };

  const input = (id: string, label: string) => {
    return (
      <>
        <label for={id}>
          {label}
        </label>
        <input id={id}/>
      </>);
  };
  return (
    <div class={styles.sheet_bio}>
      {row(<h2>Investigator</h2>)}
      {row(input("sheet_bio_name", "Name"))}
      {row(input("sheet_bio_occupation", "Occupation"))}
      {row(
        <>
          {input("sheet_bio_age", "Age")}
          {input("sheet_bio_pronouns", "Pronouns")}
        </>
      )}
      {row(input("sheet_bio_birthplace", "Birthplace"))}
      {row(input("sheet_bio_residence", "Residence"))}
    </div>
  );
};

const Stats = () => {
  return (
    <div class={styles.sheet_stats}>
      <h2>Characteristics</h2>
    </div>
  )
};

const CharacterSheet = () => {
  return (
    <div class={styles.sheet}>
      <div class={styles.sheet_row}>
        <Bio/>
        <Stats/>
      </div>
    </div>
  );
};

export default CharacterSheet;

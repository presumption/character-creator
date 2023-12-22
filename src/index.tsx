import {render} from "solid-js/web";

import Page from "./page";

const root = document.getElementById("page");

if (!(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Page/>
  ),
  root!
);

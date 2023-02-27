import "./lib/defaults.less"
import "./lib/themes.less"
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app

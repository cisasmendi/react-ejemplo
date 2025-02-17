import { mount } from 'svelte'
import './css/app.css'
import "./css/main.css";
import "./css/fontawesome-all.min.css";
import "./css/noscript.css";

import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app

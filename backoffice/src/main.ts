import { mount } from 'svelte'
import "./private/app.css";

import App from './private/Index.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})


export default app

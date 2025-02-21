import { mount } from 'svelte'


//import App from './public/Index.svelte'
import App from './private/Index.svelte'


const app = mount(App, {
  target: document.getElementById('app')!,
})


export default app

<script>
    import { Router, Route } from "svelte5-router"; // manejo de rutas
    import Login from "./public/Login.svelte";
    // @ts-ignore
    import Private from "./private/index.svelte";
    export let url = "";
</script>

<svelte:head>
    <title>Administración</title>
</svelte:head>
<Router {url}>
    <Route path="/" component={Login} />
    <Route path="/users" component={Private} />
</Router>

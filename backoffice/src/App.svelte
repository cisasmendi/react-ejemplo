<script>
    import { Router, Route } from "svelte5-router"; // manejo de rutas
    import Login from "./public/Login.svelte";
    // @ts-ignore
    import UserManagement from "./private/usersManager/Index.svelte";
    import AffilateManagement from "./private/affilatesManager/Index.svelte";
    import CardManagement from "./private/cardsManager/Index.svelte";
    import PaymentManagement from "./private/paymentsManager/Index.svelte";

    export let url = "";
</script>

<svelte:head>
    <title>Administración</title>
</svelte:head>
<Router {url}>
    <Route path="/" component={Login} />
    <Route path="/users" component={UserManagement} />
    <Route path="/affiliates" component={AffilateManagement} />
    <Route path="/generate-card" component={CardManagement} />
    <Route path="/payments" component={PaymentManagement} />
</Router>

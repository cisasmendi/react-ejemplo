<script>
  import Sidebar from "./layout/Sidebar.svelte";

  import Wrapper from "./routes/Home/Page.svelte";

  import Footer from "./layout/Footer.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    console.log("Svelte component mounted");
  });
</script>

<Sidebar></Sidebar>
<Wrapper></Wrapper>
<Footer></Footer>

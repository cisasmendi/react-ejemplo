<script>
  import Sidebar from "./layout/Sidebar.svelte";

  import Wrapper from "./Home.svelte";

  import Footer from "./layout/Footer.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    console.log("Svelte component mounted");
  });
</script>

<Sidebar></Sidebar>
<Wrapper></Wrapper>
<Footer></Footer>

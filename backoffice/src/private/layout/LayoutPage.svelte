<script>
  import DashBoard from "../../layout/DashBoard.svelte";
  import Nav from "../../layout/Nav.svelte";
</script>

<Nav></Nav>
<DashBoard>
  <slot></slot>
</DashBoard>

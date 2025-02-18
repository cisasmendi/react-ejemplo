<script>
  import { onMount } from "svelte";

  onMount(() => {
    console.log("Svelte component mounted");
  });
</script>

<div id="sidebar" class="inner">
  <nav>
    <ul>
      <li><a href="#intro">Inicio</a></li>
      <li><a href="#one">Sobre nosotros</a></li>
      <li><a href="#two">Servicios</a></li>
      <li><a href="#three">Afiliacion</a></li>
    </ul>
  </nav>
</div>

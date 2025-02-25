<script>
  import Panel from "../../layout/Panel.svelte";
  import Table from "../../layout/Table.svelte";

  import LayoutPage from "../layout/LayoutPage.svelte";
</script>

<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Gestión de Carnets</h1>
    <Table title="Afiliados" showSearch="true" showAddButton="false" />
  </Panel>
</LayoutPage>

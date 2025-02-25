<script>
  import Panel from "../../layout/Panel.svelte";
  import Table from "../../layout/Table.svelte";

  import LayoutPage from "../layout/LayoutPage.svelte";

  const listLabels = [
    { label: "Usuario", key: "users" },
    { label: "Nombre", key: "name" },
    { label: "Apellido", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Rol", key: "role" },
    { label: "Estado", key: "status" },
  ];
</script>

<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Gestión de Usuarios</h1>
    <Table
      title="Usuarios"
      labelData={listLabels}
      showSearch="true"
      showAddButton="true"
      addButtonLabel="Nuevo Usuario"
    />
  </Panel>
</LayoutPage>

<script>
  import Panel from "../../layout/Panel.svelte";
  import Table from "../../layout/Table.svelte";
  import LayoutPage from "../layout/LayoutPage.svelte";

  const listLabels = [
    { label: "Cuil", key: "cuil" }, 
    { label: "Apellido", key: "lastName" },
    { label: "Nombre", key: "name" },   
    {label: "Domicilio", key: "address"},
    {label: "Email", key: "email"},
    {label: "Telefono", key: "phone"},
    {label: "Estado", key: "status"},
    {label: "Fecha de Alta", key: "createdAt"},
    {label: "fecha de pago", key: "paymentDate"},
  ];

</script>
<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Gestión de Afiliados</h1>
    <Table title="Afiliados" showSearch="true" showAddButton="true" labelData={listLabels} />
  </Panel>
</LayoutPage>

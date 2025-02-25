<script>
  import LayoutPage from '../layout/LayoutPage.svelte';

  import Table from "../../layout/Table.svelte";

  import Modal from "../../layout/Modal.svelte";

  import Panel from "../../layout/Panel.svelte";

  const listLabels=[
    {label: "Cuil", key: "cuil"},
    {label: "Nombre", key: "name"},
    {label: "Apellido", key: "lastName"},
    {label: "Fecha de Pago", key: "paymentDate"},
    {label: "Monto", key: "amount"},
  ];
</script>

<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">
      Gestión de Pagos
    </h1>
   <Table title="Pagos" showSearch=true showAddButton=true addButtonLabel="Nuevo Pago" labelData={listLabels} />
  <Modal></Modal>
  </Panel>
</LayoutPage>
 


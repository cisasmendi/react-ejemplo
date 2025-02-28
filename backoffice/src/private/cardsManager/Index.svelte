<script>
  import Panel from "../../lib/layout/Panel.svelte";
  import Table from "../../lib/Componets/Table/Table.svelte";
  import LayoutPage from "../layout/LayoutPage.svelte";

  const listLabels = [
    { label: "Cuil", key: "cuil" },
    { label: "Apellido", key: "lastName" },
    { label: "Nombre", key: "name" },
    { label: "Domicilio", key: "address" },
    { label: "Telefono", key: "phone" },
    { label: "Estado", key: "status" },
  ];

  const data=[    
    {cuil: "20-12345678-9", lastName: "Perez", name: "Juan", address: "Calle 123", phone: "123456", status: "Activo"},
    {cuil: "20-87654321-9", lastName: "Gomez", name: "Maria", address: "Calle 456", phone: "654321", status: "Inactivo"},
    {cuil: "20-11111111-9", lastName: "Gonzalez", name: "Pedro", address: "Calle 789", phone: "111111", status: "Activo"},
    {cuil: "20-22222222-9", lastName: "Rodriguez", name: "Ana", address: "Calle 101112", phone: "222222", status: "Inactivo"},
    {cuil: "20-33333333-9", lastName: "Fernandez", name: "Carlos", address: "Calle 131415", phone: "333333", status: "Activo"},
    {cuil: "20-44444444-9", lastName: "Lopez", name: "Laura", address: "Calle 161718", phone: "444444", status: "Inactivo"},
    {cuil: "20-55555555-9", lastName: "Martinez", name: "Jose", address: "Calle 192021", phone: "555555", status: "Activo"},
    {cuil: "20-66666666-9", lastName: "Sanchez", name: "Silvia", address: "Calle 222324", phone: "666666", status: "Inactivo"},
    {cuil: "20-77777777-9", lastName: "Torres", name: "Ricardo", address: "Calle 252627", phone: "777777", status: "Activo"},
    {cuil: "20-88888888-9", lastName: "Garcia", name: "Florencia", address: "Calle 282930", phone: "888888", status: "Inactivo"},
  ];

</script>

<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Gestión de Carnets</h1>
    <Table title="Afiliados" showSearch={true} labelData={listLabels} {data} />
  </Panel>
</LayoutPage>

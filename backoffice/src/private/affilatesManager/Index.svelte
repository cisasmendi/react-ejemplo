<script>
  import Panel from "../../layout/Panel.svelte";
  import Table from "../../layout/Table.svelte";
  import LayoutPage from "../layout/LayoutPage.svelte";

  const listLabels = [
    { label: "Cuil", key: "cuil" },
    { label: "Apellido", key: "lastName" },
    { label: "Nombre", key: "name" },
    { label: "Domicilio", key: "address" },
    { label: "Email", key: "email" },
    { label: "Telefono", key: "phone" },
    { label: "Estado", key: "status" },
    { label: "Fecha de Alta", key: "createdAt" },
    { label: "fecha de pago", key: "paymentDate" },
  ];

  const data = [
  {
    cuil: "20-12345678-9",
    lastName: "Perez",
    name: "Juan",
    address: "Calle 123",
    email: "ww@asas.com",
    phone: "123456",
    status: "Activo",
    createdAt: "2021-10-01",
    paymentDate: "2021-10-01",
  },
  {
    cuil: "20-87654321-9",
    lastName: "Gomez",
    name: "Maria",
    address: "Calle 456",
    email: "wqwq@qq.com",
    phone: "654321",
    status: "Inactivo",
    createdAt: "2021-10-01",
    paymentDate: "2021-10-01",
  },
  {
    cuil: "27-23456789-0",
    lastName: "Lopez",
    name: "Carlos",
    address: "Av. Siempre Viva 742",
    email: "carlos.lopez@example.com",
    phone: "234567",
    status: "Activo",
    createdAt: "2022-01-15",
    paymentDate: "2022-02-15",
  },
  {
    cuil: "23-34567890-1",
    lastName: "Martinez",
    name: "Ana",
    address: "Calle Falsa 123",
    email: "ana.martinez@example.com",
    phone: "345678",
    status: "Activo",
    createdAt: "2022-03-20",
    paymentDate: "2022-04-20",
  },
  {
    cuil: "21-45678901-2",
    lastName: "Garcia",
    name: "Pedro",
    address: "Boulevard de la Luz 45",
    email: "pedro.garcia@example.com",
    phone: "456789",
    status: "Inactivo",
    createdAt: "2021-12-05",
    paymentDate: "2022-01-05",
  },
  {
    cuil: "22-56789012-3",
    lastName: "Sanchez",
    name: "Lucia",
    address: "Plaza Mayor 10",
    email: "lucia.sanchez@example.com",
    phone: "567890",
    status: "Activo",
    createdAt: "2022-02-28",
    paymentDate: "2022-03-28",
  },
  {
    cuil: "24-67890123-4",
    lastName: "Ramirez",
    name: "Jorge",
    address: "Calle de los Pinos 77",
    email: "jorge.ramirez@example.com",
    phone: "678901",
    status: "Activo",
    createdAt: "2021-11-11",
    paymentDate: "2021-12-11",
  },
  {
    cuil: "25-78901234-5",
    lastName: "Torres",
    name: "Elena",
    address: "Avenida Libertad 89",
    email: "elena.torres@example.com",
    phone: "789012",
    status: "Inactivo",
    createdAt: "2022-04-10",
    paymentDate: "2022-05-10",
  },
  {
    cuil: "26-89012345-6",
    lastName: "Diaz",
    name: "Ricardo",
    address: "Calle Central 5",
    email: "ricardo.diaz@example.com",
    phone: "890123",
    status: "Activo",
    createdAt: "2022-05-05",
    paymentDate: "2022-06-05",
  },
  {
    cuil: "20-90123456-7",
    lastName: "Fernandez",
    name: "Sofia",
    address: "Ruta 66",
    email: "sofia.fernandez@example.com",
    phone: "901234",
    status: "Inactivo",
    createdAt: "2022-07-07",
    paymentDate: "2022-08-07",
  },
];

</script>

<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Gestión de Afiliados</h1>
    <Table
      title="Afiliados"
      itemsPerPage={5}
      showSearch="true"
      showAddButton="true"
      labelData={listLabels}
      {data}    
    />
  </Panel>
</LayoutPage>

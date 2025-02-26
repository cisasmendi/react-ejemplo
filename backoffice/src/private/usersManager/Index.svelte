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

  const data = [
  {
    users: "user01",
    name: "Juan",
    lastName: "Perez",
    email: "juan.perez@example.com",
    role: "Administrador",
    status: "Activo",
  },
  {
    users: "user02",
    name: "Maria",
    lastName: "Gomez",
    email: "maria.gomez@example.com",
    role: "Usuario",
    status: "Inactivo",
  },
  {
    users: "user03",
    name: "Carlos",
    lastName: "Lopez",
    email: "carlos.lopez@example.com",
    role: "Moderador",
    status: "Activo",
  },
  {
    users: "user04",
    name: "Ana",
    lastName: "Martinez",
    email: "ana.martinez@example.com",
    role: "Usuario",
    status: "Activo",
  },
  {
    users: "user05",
    name: "Pedro",
    lastName: "Garcia",
    email: "pedro.garcia@example.com",
    role: "Administrador",
    status: "Inactivo",
  },
  {
    users: "user06",
    name: "Lucia",
    lastName: "Sanchez",
    email: "lucia.sanchez@example.com",
    role: "Usuario",
    status: "Activo",
  },
  {
    users: "user07",
    name: "Jorge",
    lastName: "Ramirez",
    email: "jorge.ramirez@example.com",
    role: "Moderador",
    status: "Activo",
  },
  {
    users: "user08",
    name: "Elena",
    lastName: "Torres",
    email: "elena.torres@example.com",
    role: "Usuario",
    status: "Inactivo",
  },
  {
    users: "user09",
    name: "Ricardo",
    lastName: "Diaz",
    email: "ricardo.diaz@example.com",
    role: "Administrador",
    status: "Activo",
  },
  {
    users: "user10",
    name: "Sofia",
    lastName: "Fernandez",
    email: "sofia.fernandez@example.com",
    role: "Moderador",
    status: "Activo",
  },
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
      {data}

    />
  </Panel>
</LayoutPage>

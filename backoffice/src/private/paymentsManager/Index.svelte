<script>
  import LayoutPage from "../layout/LayoutPage.svelte";
  import Table from "../../lib/Componets/Table/Table.svelte";
  import Modal from "$lib/Componets/Modal.svelte";
  import Panel from "../../lib/layout/Panel.svelte";

  const listLabels = [
    { label: "Cuil", key: "cuil" },
    { label: "Nombre", key: "name" },
    { label: "Apellido", key: "lastName" },
    { label: "Fecha de Pago", key: "paymentDate" },
    { label: "Monto", key: "amount" },
  ];

  const data = [
    {
      cuil: "20-12345678-9",
      name: "Juan",
      lastName: "Perez",
      paymentDate: "2024-02-01",
      amount: 15000,
    },
    {
      cuil: "20-87654321-9",
      name: "Maria",
      lastName: "Gomez",
      paymentDate: "2024-02-05",
      amount: 20000,
    },
    {
      cuil: "27-23456789-0",
      name: "Carlos",
      lastName: "Lopez",
      paymentDate: "2024-01-28",
      amount: 18000,
    },
    {
      cuil: "23-34567890-1",
      name: "Ana",
      lastName: "Martinez",
      paymentDate: "2024-01-15",
      amount: 22000,
    },
    {
      cuil: "21-45678901-2",
      name: "Pedro",
      lastName: "Garcia",
      paymentDate: "2024-02-10",
      amount: 25000,
    },
    {
      cuil: "22-56789012-3",
      name: "Lucia",
      lastName: "Sanchez",
      paymentDate: "2024-02-03",
      amount: 17000,
    },
    {
      cuil: "24-67890123-4",
      name: "Jorge",
      lastName: "Ramirez",
      paymentDate: "2024-01-30",
      amount: 19000,
    },
    {
      cuil: "25-78901234-5",
      name: "Elena",
      lastName: "Torres",
      paymentDate: "2024-02-12",
      amount: 23000,
    },
    {
      cuil: "26-89012345-6",
      name: "Ricardo",
      lastName: "Diaz",
      paymentDate: "2024-02-08",
      amount: 16000,
    },
    {
      cuil: "20-90123456-7",
      name: "Sofia",
      lastName: "Fernandez",
      paymentDate: "2024-01-20",
      amount: 21000,
    },
  ];
// es reactivo por lo que se actualiza el valor de hiddenEnable
  let hiddenEnable = false;
  $:hiddenEnable;

</script>

<LayoutPage>
  <Panel>
    <h1 class="text-2xl font-bold text-gray-800 mb-4">Gestión de Pagos</h1>
    <Table
      getRow={(row) => {
        hiddenEnable = true;    
      }}
     
      paginate={(page) => {
        console.log("🚀 ~ page:", page);
      }}
      search={(query) => {
        console.log("🚀 ~ query:", query);
      }}
     
      title="Pagos"
      showSearch="true"
      labelData={listLabels}
      {data}
    />
  </Panel>

</LayoutPage>

<Modal title={"Nuevo pago"} {hiddenEnable}
listenclose={() => {
  hiddenEnable = false;
  console.log("🚀 ~ hiddenEnable:", hiddenEnable)
}}
>
  <div id="modalContent" class="mb-4">
    <form id="userForm" class="space-y-4">
      <div class="flex flex-col">
        <label for="cuil" class="text-sm font-semibold text-gray-600">
          Cuil
        </label>
        <input
          type="text"
          id="cuil"
          name="cuil"
          class="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label for="name" class="text-sm font-semibold text-gray-600">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label for="lastName" class="text-sm font-semibold text-gray-600">
          Apellido
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          class="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label for="paymentDate" class="text-sm font-semibold text-gray-600">
          Fecha de Pago
        </label>
        <input
          type="date"
          id="paymentDate"
          name="paymentDate"
          class="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div class="flex flex-col">
        <label for="amount" class="text-sm font-semibold text-gray-600">
          Monto
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          class="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    
    </form>
  </div>
  <div class="flex justify-end gap-2">
    <button
     onclick={() => {
        hiddenEnable = false;       
      }}
      class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      >Cancel</button
    >
    <button
      id="modalAction"
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >Guardar</button
    >
  </div>
</Modal>

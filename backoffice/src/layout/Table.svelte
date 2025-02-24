<script>
  import Panel from './Panel.svelte';

    let { title="Usuarios", showSearch=true, addButtonLabel="Agregar User", labelData =[] , data=[] } = $props();

</script>
  
<Panel>
      <div id="usersTable" class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
              <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  {#if showSearch}
                  <div class="relative w-full md:w-64">
                      <input type="text" 
                             placeholder="Search..." 
                             class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <svg class="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                  </div>
                  {/if}
                  <button  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center whitespace-nowrap">
                      <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      {addButtonLabel}
                  </button>
              </div>
          </div>
          <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>                         
                        {#each labelData as label}
                            <th class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{label}</th>
                        {/each}
                      </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
                      {#each data as row}
                      <tr>
                          <td class="px-4 md:px-6 py-4 whitespace-nowrap text-sm">{row.labelData[0]}</td>                                                
                      </tr>
                      {/each}
                  </tbody>
              </table>
          </div>
      </div>
  </Panel>
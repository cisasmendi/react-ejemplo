<script>


</script>

<nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed w-full z-30 top-0">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dashboard</span>
            </div>
            <div class="flex items-center gap-4">
                <!-- Added: User info display -->
                <div class="hidden md:flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span class="font-medium mr-2">John Doe</span>
                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Admin</span>
                </div>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button id="theme-toggle" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                </button>
                <!-- Added: User menu dropdown -->
                <div class="relative">
                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button">
                        <!-- svelte-ignore a11y_img_redundant_alt -->
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32" alt="user photo">
                    </button>
                    <!-- Added: Dropdown menu -->
                    <div id="user-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg py-1">
                        <!-- svelte-ignore a11y_invalid_attribute -->
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Configure Profile</a>
                        <!-- svelte-ignore a11y_invalid_attribute -->
                        <a href="#" class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>


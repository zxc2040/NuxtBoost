<template>
  <button type="button"
    data-dropdown-toggle="apps-dropdown"
    class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
    <span class="sr-only">View notifications</span>
    <!-- Icon -->
    <Icon aria-hidden="true"
      class="w-6 h-6"
      name="mdi:dots-grid"></Icon>
  </button>
  <!-- Dropdown menu -->
  <div
    class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
    id="apps-dropdown">
    <div
      class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
      Apps
    </div>
    <div class="grid grid-cols-3 gap-4 p-4">
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:shopping"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">Sales</div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:account-group"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">Users</div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:inbox"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">Inbox</div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:account-circle"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">
          Profile
        </div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:cog"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">
          Settings
        </div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:file-percent"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">
          Billing
        </div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <Icon aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          name="mdi:logout-variant"></Icon>
        <div class="text-sm text-gray-900 dark:text-white">
          Logout
        </div>
      </a>
    </div>
  </div>
</template>
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
        <svg aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
          <path fill-rule="evenodd"
            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
        <div class="text-sm text-gray-900 dark:text-white">
          Products
        </div>
      </a>
      <a href="#"
        class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <svg aria-hidden="true"
          class="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z">
          </path>
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clip-rule="evenodd"></path>
        </svg>
        <div class="text-sm text-gray-900 dark:text-white">
          Pricing
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
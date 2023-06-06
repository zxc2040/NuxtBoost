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
      <LayoutAppDropMenuItem icon-name="mdi:shopping">Sales</LayoutAppDropMenuItem>
      <LayoutAppDropMenuItem icon-name="mdi:account-group">Users</LayoutAppDropMenuItem>
      <LayoutAppDropMenuItem icon-name="mdi:inbox">Inbox</LayoutAppDropMenuItem>
      <LayoutAppDropMenuItem icon-name="mdi:account-circle">Profile</LayoutAppDropMenuItem>
      <LayoutAppDropMenuItem icon-name="mdi:cog">Settings</LayoutAppDropMenuItem>
      <LayoutAppDropMenuItem icon-name="mdi:file-percent">Billing</LayoutAppDropMenuItem>
      <LayoutAppDropMenuItem icon-name="mdi:logout-variant">Logout</LayoutAppDropMenuItem>
    </div>
  </div>
</template>
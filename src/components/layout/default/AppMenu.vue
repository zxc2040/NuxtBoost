<template>
  <ul class="space-y-2">
    <li>
      <a href="#"
        class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <Icon aria-hidden="true"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          name="mdi:home"></Icon>
        <span class="ml-3">Home</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <Icon aria-hidden="true"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          name="mdi:chart-line"></Icon>
        <span class="ml-3">Report</span>
      </a>
    </li>
    <li>
      <button type="button"
        class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-pages"
        data-collapse-toggle="dropdown-pages">
        <Icon aria-hidden="true"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          name="mdi:file-document"></Icon>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
        <Icon aria-hidden="true"
          class="w-6 h-6"
          name="mdi:chevron-down"></Icon>
      </button>
      <ul id="dropdown-pages"
        class="hidden py-2 space-y-2">
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
        </li>
      </ul>
    </li>
    <li>
      <button type="button"
        class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-sales"
        data-collapse-toggle="dropdown-sales">
        <Icon aria-hidden="true"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          name="mdi:shopping"></Icon>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
        <Icon aria-hidden="true"
          class="w-6 h-6"
          name="mdi:chevron-down"></Icon>
      </button>
      <ul id="dropdown-sales"
        class="hidden py-2 space-y-2">
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#"
        class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <Icon aria-hidden="true"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          name="mdi:forum"></Icon>
        <span class="flex-1 ml-3 whitespace-nowrap">Messages</span>
        <span
          class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
          4
        </span>
      </a>
    </li>
    <li>
      <button type="button"
        class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-authentication"
        data-collapse-toggle="dropdown-authentication">
        <Icon aria-hidden="true"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          name="mdi:lock"></Icon>
        <span class="flex-1 ml-3 text-left whitespace-nowrap">Authentication</span>
        <Icon aria-hidden="true"
          class="w-6 h-6"
          name="mdi:chevron-down"></Icon>
      </button>
      <ul id="dropdown-authentication"
        class="hidden py-2 space-y-2">
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign
            In</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign
            Up</a>
        </li>
        <li>
          <a href="#"
            class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot
            Password</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
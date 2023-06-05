<template>
  <div class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
    <a href="#"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
      <Icon aria-hidden="true"
        class="w-6 h-6"
        name="mdi:tune-vertical"></Icon>
    </a>
    <a href="#"
      data-tooltip-target="tooltip-settings"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Icon aria-hidden="true"
        class="w-6 h-6"
        name="mdi:cog"></Icon>
    </a>
    <div id="tooltip-settings"
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
      Settings page
      <div class="tooltip-arrow"
        data-popper-arrow></div>
    </div>
    <button type="button"
      data-dropdown-toggle="language-dropdown"
      class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Icon aria-hidden="true"
        class="h-5 w-5 rounded-full mt-0.5"
        name="emojione:flag-for-thailand"></Icon>
    </button>
    <!-- Dropdown -->
    <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      id="language-dropdown">
      <ul class="py-1"
        role="none">
        <li>
          <a href="#"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
            role="menuitem">
            <div class="inline-flex items-center">
              <Icon aria-hidden="true"
                class="h-3.5 w-3.5 rounded-full mr-2"
                name="emojione:flag-for-united-states"></Icon>
              English (US)
            </div>
          </a>
        </li>
        <li>
          <a href="#"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
            role="menuitem">
            <div class="inline-flex items-center">
              <Icon aria-hidden="true"
                class="h-3.5 w-3.5 rounded-full mr-2"
                name="emojione:flag-for-thailand"></Icon>
              Thai (ภาษาไทย)
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
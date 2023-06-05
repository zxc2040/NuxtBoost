<template>
    <o-button variant="primary" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        Primary
    </o-button>

    <o-button variant="success" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        Success
    </o-button>

    <o-button variant="danger" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        Danger
    </o-button>

    <o-button variant="warning" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        Warning
    </o-button>

    <o-button variant="primary" rootClass="rounded-full px-5 py-2.5 mr-2 mb-2">
        Primary
    </o-button>

    <o-button disabled rootClass="cursor-not-allowed rounded-lg px-5 py-2.5 mr-2">
        Disabled button
    </o-button>

    <o-button inverted="primary" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2">
        Default
    </o-button>

    <o-button size="small" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        small
    </o-button>

    <o-button size="medium" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        medium
    </o-button>

    <o-button size="large" rootClass="rounded-lg px-5 py-2.5 mr-2 mb-2 ">
        large
    </o-button>
</template>
<style>
.o-btn--primary {
    @apply text-white text-sm font-medium text-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
}

.o-btn--success {
    @apply text-white text-sm font-medium text-center bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
}

.o-btn--danger {
    @apply text-white text-sm font-medium text-center bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800
}

.o-btn--warning {
    @apply text-white text-sm font-medium text-center bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700
}

.o-btn--disabled {
    @apply text-white text-sm font-medium text-center bg-blue-400 dark:bg-blue-500
}

.o-btn--inverted {
    @apply text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 
}

.o-btn--small {
    @apply text-white text-xs font-medium text-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
}

.o-btn--medium {
    @apply text-white text-base font-medium text-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
}

.o-btn--large {
    @apply text-white text-xl font-medium text-center bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
}
</style>
<template>
  <ul class="space-y-2">
    <li>
      <MenuItem icon-name="mdi:home">Home</MenuItem>
    </li>
    <li>
      <MenuItem icon-name="mdi:chart-line">Report</MenuItem>
    </li>
    <li>
      <MenuDropDown label="Pages" icon-name="mdi:file-document">
        <MenuDropItem>Settings</MenuDropItem>
        <MenuDropItem>Kanban</MenuDropItem>
        <MenuDropItem>Calendar</MenuDropItem>
      </MenuDropDown>
    </li>
    <li>
      <MenuDropDown label="Sales" icon-name="mdi:shopping">
        <MenuDropItem>Products</MenuDropItem>
        <MenuDropItem>Billing</MenuDropItem>
        <MenuDropItem>Invoices</MenuDropItem>
      </MenuDropDown>
    </li>
    <li>
      <MenuItem icon-name="mdi:forum" badge="4">Messages</MenuItem>
    </li>
    <li>
      <MenuDropDown label="Authentication" icon-name="mdi:lock">
        <MenuDropItem>Sign In</MenuDropItem>
        <MenuDropItem>Sign Up</MenuDropItem>
        <MenuDropItem>Forgot Password</MenuDropItem>
      </MenuDropDown>
    </li>
  </ul>
</template>


<template>
  <aside class="workspace-sidebar">
    <nav class="sidebar-nav">
      <ul>
        <li class="active">
          <span>🏠</span>
          <span>Home</span>
        </li>
        <li>
          <span>📁</span>
          <span>My Bots</span>
        </li>
        <li>
          <span>⚙️</span>
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// No script needed for basic functionality
</script>

<style scoped>
.workspace-sidebar {
  width: 240px;
  border-right: 1px solid #eaeaea;
  padding: 16px 0;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.sidebar-nav li:hover {
  background: #f5f5f5;
}

.sidebar-nav li.active {
  background: #e8f0fe;
  color: #1a73e8;
  font-weight: 500;
}
</style>


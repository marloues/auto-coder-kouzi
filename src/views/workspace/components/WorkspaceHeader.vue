
<template>
  <header class="workspace-header">
    <div class="header-left">
      <h1>My Workspace</h1>
    </div>
    <div class="header-right">
      <button class="create-btn" @click="$emit('create')">
        + Create
      </button>
      <div class="user-avatar">
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </div>
  </header>
</template>

<script setup>
// No script needed for basic functionality
</script>

<style scoped>
.workspace-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eaeaea;
}

.header-left h1 {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.create-btn {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.user-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

<script setup lang="ts">
</script>

<template>
  <div class="app-container">
    <div class="main-layout">
      <main class="content-view">
        <Transition name="fade" mode="out-in">
          <router-view />
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-layout {
  flex: 1;
  display: flex;
  height: 100vh;
}

.content-view {
  flex: 1;
  padding: 24px;
  background: white;
  overflow-y: auto;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

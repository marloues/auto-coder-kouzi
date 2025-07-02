<script setup lang="ts">
import KoziHeader from '@/components/KoziHeader.vue'
import KoziSidebar from '@/components/KoziSidebar.vue'
</script>

<template>
  <div class="app-container">
    <KoziHeader class="h-16 border-b" />
    
    <div class="main-layout">
      <KoziSidebar class="sidebar" />
      
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
  height: calc(100vh - 64px); /* 减去header高度 */
}

.sidebar {
  width: 240px;
  background: #f8f9fa;
  border-right: 1px solid #e9ecef;
  height: 100%;
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

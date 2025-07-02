
<template>
  <div class="workspace-container">
    <WorkspaceHeader />
    <div class="workspace-content">
      <WorkspaceSidebar />
      <main class="workspace-main">
        <div class="workspace-items">
          <WorkspaceItem 
            v-for="item in workspaceItems" 
            :key="item.id"
            :item="item"
          />
        </div>
      </main>
    </div>
    <CreateModal v-if="showCreateModal" @close="showCreateModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WorkspaceHeader from './components/WorkspaceHeader.vue'
import WorkspaceSidebar from './components/WorkspaceSidebar.vue'
import WorkspaceItem from './components/WorkspaceItem.vue'
import CreateModal from './components/CreateModal.vue'

const showCreateModal = ref(false)
const workspaceItems = ref([
  {
    id: 1,
    title: 'My First Bot',
    description: 'A helpful assistant',
    icon: '🤖',
    lastEdited: '2 hours ago'
  },
  {
    id: 2,
    title: 'Marketing Bot',
    description: 'Social media content creator',
    icon: '📢',
    lastEdited: '1 day ago'
  }
])
</script>

<style scoped>
.workspace-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.workspace-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.workspace-main {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.workspace-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
</style>

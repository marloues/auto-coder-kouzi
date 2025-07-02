

<template>
  <div class="workspace-item" @click="navigateToItem">
    <div class="item-icon">
      {{ item.icon }}
    </div>
    <div class="item-content">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <div class="item-footer">
        <span>{{ item.lastEdited }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const navigateToItem = () => {
  // In a real app, this would navigate to the item's detail page
  console.log('Navigating to item:', props.item.id)
}
</script>

<style scoped>
.workspace-item {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.workspace-item:hover {
  border-color: #1a73e8;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.item-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.item-content h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
}

.item-content p {
  margin: 0 0 12px 0;
  color: #666;
  font-size: 14px;
}

.item-footer {
  font-size: 12px;
  color: #999;
}
</style>


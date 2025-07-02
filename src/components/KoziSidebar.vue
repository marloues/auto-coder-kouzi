<template>
  <aside class="kozi-sidebar">
    <div class="sidebar-header">
      <div class="logo">
        <span class="logo-icon">⚙️</span>
        <span>扣子空间</span>
      </div>
      <button class="new-task-btn">
        <span class="plus-icon">+</span>
        <span>新任务</span>
      </button>
    </div>
    
    <div class="sidebar-content">
      <div class="task-group" v-for="group in taskGroups" :key="group.title">
        <h3 class="group-title">
          <span class="title-icon">{{ group.icon }}</span>
          <span>{{ group.title }}</span>
        </h3>
        <div class="task-list">
          <div class="task-item" v-for="task in group.tasks" :key="task">
            {{ task }}
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const taskGroups = [
  {
    title: '今天',
    icon: '☀️',
    tasks: ['查询深圳天气']
  },
  {
    title: '过去7天',
    icon: '📅',
    tasks: ['生成一个excel']
  },
  {
    title: '过去30天',
    icon: '🗓️',
    tasks: ['查询深圳天气']
  },
  {
    title: '过往',
    icon: '📚',
    tasks: ['创建知识智能体', '100%还原复刻色首页', '仿照豆包做AI首页']
  },
  {
    title: '学习分享簿',
    icon: '📝',
    tasks: ['已执行完毕，可继续对话']
  }
]
</script>

<style scoped>
.kozi-sidebar {
  width: 260px;
  height: 100vh;
  background-color: #1e1e2d;
  padding: 20px 16px;
  box-sizing: border-box;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2d2d3d;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #2d2d3d;
}

.logo {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
}

.logo-icon {
  font-size: 20px;
}

.new-task-btn {
  padding: 8px 12px;
  background-color: #4a6bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
}

.new-task-btn:hover {
  background-color: #3a5bef;
  transform: translateY(-1px);
}

.plus-icon {
  font-size: 16px;
  font-weight: bold;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

.task-group {
  margin-bottom: 20px;
}

.group-title {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #a0a0c0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 16px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.task-item {
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.task-item:hover {
  background-color: #2d2d3d;
  color: #ffffff;
}

/* 滚动条样式 */
.sidebar-content::-webkit-scrollbar {
  width: 4px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: #4a6bff;
  border-radius: 4px;
}
</style>

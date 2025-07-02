<template>
  <div class="kozi-agent-list">
    <h3 class="title">专家助手推荐</h3>
    <p class="subtitle">试试这些专业领域的AI助手</p>
    <div class="agent-items">
      <div 
        v-for="agent in agents" 
        :key="agent.id"
        class="agent-item"
        :class="{ active: selectedAgent === agent.id }"
        @click="selectAgent(agent.id)"
      >
        {{ agent.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Agent {
  id: string
  name: string
}

const agents: Agent[] = [
  { id: 'travel', name: 'DeepTrip 旅行专家' },
  { id: 'stock', name: '华泰A股观察助手' },
  { id: 'analysis', name: '舆情分析专家' },
  { id: 'dev', name: '网站开发专家' },
  { id: 'law', name: '幂律法律助手' },
  { id: 'research', name: '用户研究专家' }
]

const selectedAgent = ref<string | null>(null)

const selectAgent = (id: string) => {
  selectedAgent.value = selectedAgent.value === id ? null : id
}
</script>

<style scoped>
.kozi-agent-list {
  --primary-color: hsl(227.37, 26.03%, 14.31%);
  --active-color: hsl(227.37, 26.03%, 20%);
  --hover-color: hsl(227.37, 26.03%, 18%);
  --text-color: #fff;
  --highlight-color: #4fc3f7;
  
  margin-bottom: 24px;
  color: var(--text-color);
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--highlight-color);
}

.subtitle {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 12px;
}

.agent-items {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.agent-item {
  padding: 10px 16px;
  background-color: var(--primary-color);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  
  &:hover {
    background-color: var(--hover-color);
    transform: translateY(-2px);
  }
  
  &.active {
    background-color: var(--active-color);
    box-shadow: 0 0 0 2px var(--highlight-color);
  }
}
</style>

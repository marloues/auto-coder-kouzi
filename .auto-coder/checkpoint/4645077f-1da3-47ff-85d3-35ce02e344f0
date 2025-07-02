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
  
  margin-bottom: 32px;
  color: var(--text-color);
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--highlight-color);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--highlight-color), transparent);
  }
}

.subtitle {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 16px;
  line-height: 1.5;
}

.agent-items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.agent-item {
  padding: 12px 20px;
  background-color: var(--primary-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  min-width: 180px;
  
  &:hover {
    background-color: var(--hover-color);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &.active {
    background-color: var(--active-color);
    box-shadow: 0 0 0 3px var(--highlight-color), 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
}
</style>

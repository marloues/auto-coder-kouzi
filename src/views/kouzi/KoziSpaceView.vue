<template>
  <div class="kozi-space-page">
    <KoziSidebar />
    <div class="main-content">
      <KoziHeader />
      <KoziAgentList />
      <KoziTagList />
      <KoziCaseCards />
    </div>
  </div>
</template>

<script setup lang="ts">
import KoziSidebar from "../../components/KoziSidebar.vue";
import KoziHeader from "../../components/KoziHeader.vue";
import KoziAgentList from "../../components/KoziAgentList.vue";
import KoziTagList from "../../components/KoziTagList.vue";
import KoziCaseCards from "../../components/KoziCaseCards.vue";
</script>

<style scoped>
.kozi-space-page {
  display: flex;
  height: 100vh;
  background-color: hsl(227.37,22.35%,16.67%);
  color: #fff;
}
.main-content {
  background: linear-gradient(135deg, rgba(25,27,45,0.95) 0%, rgba(42,30,70,0.95) 100%);
  flex: 1;
  padding: 24px;
  margin: 16px;
  border-radius: 12px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(138, 43, 226, 0.1),
    0 0 10px rgba(138, 43, 226, 0.2);
  overflow-y: auto;
  height: calc(100vh - 32px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
}

.main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.4), rgba(75, 0, 130, 0.4));
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.main-content:hover {
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(138, 43, 226, 0.2),
    0 0 20px rgba(138, 43, 226, 0.4);
  transform: translateY(-2px);
}
</style>

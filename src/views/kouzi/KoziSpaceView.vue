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
  background-color: rgb(25,27,45);
  flex: 1;
  padding: 24px;
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  height: calc(100vh - 32px);
  transition: all 0.3s ease;
}

.main-content:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
}
</style>

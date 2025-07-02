<script setup lang="ts">
import { ref } from "vue";
import VueOfficeExcel from "@vue-office/excel";
import "@vue-office/excel/lib/index.css";

const excelFile = ref<string | ArrayBuffer | null>(null);

const handleFile = (e: Event) => {
  const target = e.target as HTMLInputElement | null;
  const file = target && target.files ? target.files[0] : null;
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev: ProgressEvent<FileReader>) => {
      if (ev.target) {
        excelFile.value = ev.target.result;
      }
    };
    reader.readAsArrayBuffer(file);
  }
};

const renderedHandler = () => {
  console.log("Excel渲染完成");
};
</script>

<template>
  <div>
    <input type="file" @change="handleFile" accept=".xlsx,.xls" />
    <vue-office-excel :src="excelFile" @rendered="renderedHandler" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

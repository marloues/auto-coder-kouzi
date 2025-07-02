<script setup lang="ts">
import KouziSpace from './components/KouziSpace.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <KouziSpace />
  <router-view/>
</template>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
}
nav {
  padding: 1rem;
  text-align: center;
}
nav a {
  padding: 0 1rem;
}
</style>

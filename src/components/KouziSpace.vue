
<template>
  <div class="kouzi-space">
    <header class="space-header">
      <h1>扣子空间</h1>
      <div class="user-info">
        <span>欢迎回来</span>
        <div class="avatar"></div>
      </div>
    </header>

    <nav class="space-nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">作品</a></li>
        <li><a href="#">收藏</a></li>
        <li><a href="#">消息</a></li>
        <li><a href="#">设置</a></li>
      </ul>
    </nav>

    <main class="space-content">
      <div class="content-grid">
        <div class="grid-item" v-for="i in 9" :key="i">
          <div class="item-content">
            <div class="item-image"></div>
            <h3>作品 {{i}}</h3>
            <p>这是第{{i}}个作品</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'KouziSpace',
})
</script>

<style scoped>
.kouzi-space {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.space-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.space-header h1 {
  font-size: 24px;
  color: #333;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
}

.space-nav ul {
  display: flex;
  list-style: none;
  padding: 20px 0;
  gap: 20px;
}

.space-nav a {
  text-decoration: none;
  color: #666;
  font-size: 16px;
}

.space-nav a:hover {
  color: #1890ff;
}

.space-content {
  padding: 20px 0;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grid-item {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.grid-item:hover {
  transform: translateY(-5px);
}

.item-content {
  padding: 15px;
}

.item-image {
  height: 160px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border-radius: 4px;
}

.item-content h3 {
  margin: 0 0 8px;
  font-size: 16px;
}

.item-content p {
  margin: 0;
  font-size: 14px;
  color: #999;
}
</style>

<template>
  <aside class="kozi-sidebar">
    <div class="sidebar-header">
      <div class="logo">扣子空间</div>
      <button class="new-task-btn">+ 新任务</button>
    </div>
    <div class="task-group">
      <h3>今天</h3>
      <p>查询深圳天气</p>
    </div>
    <div class="task-group">
      <h3>过去7天</h3>
      <p>生成一个excel</p>
    </div>
    <div class="task-group">
      <h3>过去30天</h3>
      <p>查询深圳天气</p>
    </div>
    <div class="task-group">
      <h3>过往</h3>
      <p>创建知识智能体</p>
      <p>100%还原复刻色首页</p>
      <p>仿照豆包做AI首页</p>
    </div>
    <div class="task-group">
      <h3>学习分享簿</h3>
      <p>已执行完毕，可继续对话</p>
    </div>
  </aside>
</template>

<script setup lang="ts">
// 可补充 TS 类型、引入响应式数据等，这里简单示例
</script>

<style scoped>
.kozi-sidebar {
  width: 220px;
  background-color: #2c2c2c;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.logo {
  font-size: 18px;
  font-weight: bold;
}
.new-task-btn {
  padding: 6px 12px;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.task-group {
  margin-bottom: 15px;
}
.task-group h3 {
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
}
.task-group p {
  font-size: 12px;
  margin: 4px 0;
  cursor: pointer;
}
</style>

<template>
  <div class="kozi-header">
    <h1>你好，RootUser_2107250068</h1>
    <div class="input-area">
      <input
        type="text"
        placeholder="给我布置一个任务（可以让我写文章、做PPT、做播客...）"
        class="task-input"
      />
      <div class="btn-group">
        <button class="btn">附件</button>
        <button class="btn">扩展</button>
        <button class="btn">自动</button>
        <button class="send-btn">发送</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可补充输入框双向绑定、按钮事件逻辑等
</script>

<style scoped>
.kozi-header {
  margin-bottom: 20px;
  color: #fff;
}
.kozi-header h1 {
  font-size: 24px;
  margin-bottom: 15px;
}
.input-area {
  display: flex;
  align-items: center;
}
.task-input {
  flex: 1;
  padding: 10px;
  background-color: #3a3a3a;
  border: 1px solid #4f4f4f;
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
}
.btn-group {
  display: flex;
  gap: 8px;
}
.btn {
  padding: 8px 12px;
  background-color: #4f4f4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.send-btn {
  background-color: #67c23a;
}
</style>

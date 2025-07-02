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
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.kozi-header h1 {
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.input-area {
  display: flex;
  align-items: center;
  gap: 12px;
}
.task-input {
  flex: 1;
  padding: 12px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 16px;
}
.task-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.btn-group {
  display: flex;
  gap: 10px;
}
.btn {
  padding: 10px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}
.btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}
.btn:active {
  transform: translateY(0);
}
.send-btn {
  background-color: #4caf50;
  font-weight: 600;
}
.send-btn:hover {
  background-color: #3d8b40;
}
</style>

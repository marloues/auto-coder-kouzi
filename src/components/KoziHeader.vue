<template>
  <div class="kozi-header">
    <h1>你好，RootUser_2107250068</h1>
    <div class="input-area">
      <div class="input-wrapper">
        <div class="textarea-container">
          <textarea
            placeholder="给我布置一个任务（可以让我写文章、做PPT、做播客...）"
            class="task-input"
            rows="3"
          ></textarea>
          <div class="btn-group">
            <div class="left-buttons">
              <button class="btn">附件</button>
              <button class="btn">扩展</button>
              <button class="btn">自动</button>
            </div>
            <button class="send-btn">发送</button>
          </div>
        </div>
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
  padding: 20px;
  background-color: hsl(227.37,19.59%,19.02%);
}
.kozi-header h1 {
  font-size: 24px;
  margin-bottom: 15px;
}
.input-area {
  position: relative;
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
}
.input-wrapper {
  position: relative;
  width: 100%;
}
.textarea-container {
  position: relative;
  width: 100%;
}

.task-input {
  width: 100%;
  padding: 10px;
  background-color: #2a2a2a;
  border: none;
  color: #fff;
  border-radius: 4px;
  transition: all 0.3s;
  resize: vertical;
  min-height: 60px;
  box-sizing: border-box;
}
.task-input:focus {
  border-color: #67c23a;
  outline: none;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.left-buttons {
  display: flex;
  gap: 8px;
}
.btn {
  padding: 8px 16px;
  background-color: #2a2a2a;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  font-weight: 500;
  margin: 0 2px;
}
.btn:hover {
  background-color: #5a5a5a;
  transform: translateY(-1px);
}
.send-btn {
  background-color: #67c23a;
  padding: 8px 16px;
  font-weight: 600;
}
.send-btn:hover {
  background-color: #5daf34;
  transform: translateY(-1px);
}
</style>

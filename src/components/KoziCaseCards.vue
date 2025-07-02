<template>
  <div class="kozi-case-cards">
    <div class="case-card">
      <h2>高考理科志愿填报 PPT</h2>
      <p>我的一个亲戚侄子今年在江西省高考，考物化生，理科省排...</p>
    </div>
    <div class="case-card">
      <h2>学术科研 PPT</h2>
      <p>我是交互设计和LLM交叉专业的学生，目前想基于已上传文档，针...</p>
    </div>
    <div class="case-card">
      <h2>高一历史教学 PPT</h2>
      <p>我是高一历史老师，请根据文件内容制作一份课件给我的学生们...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可补充卡片数据动态渲染、点击跳转等逻辑
</script>

<style scoped>
.kozi-case-cards {
  display: flex;
  gap: 28px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.case-card {
  flex: 1;
  min-height: 200px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 28px;
  border-radius: 12px;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: 1px solid rgba(226, 232, 240, 0.6);
  position: relative;
  overflow: hidden;
}

.case-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
}

.case-card:hover {
  transform: translateY(-6px);
  box-shadow: 
    0 10px 15px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  border-color: rgba(203, 213, 225, 0.8);
}

.case-card h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #1e293b;
  font-weight: 700;
  position: relative;
  padding-bottom: 8px;
}

.case-card h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #3b82f6;
}

.case-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
}

@media (max-width: 768px) {
  .kozi-case-cards {
    flex-direction: column;
    gap: 20px;
    padding: 16px;
  }
  
  .case-card {
    padding: 22px;
  }
}
</style>

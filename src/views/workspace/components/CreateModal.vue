


<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Create New Bot</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Bot Name</label>
          <input v-model="botName" type="text" placeholder="My Awesome Bot" required />
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea v-model="description" placeholder="What does your bot do?"></textarea>
        </div>
        <div class="form-actions">
          <button type="button" class="cancel-btn" @click="$emit('close')">Cancel</button>
          <button type="submit" class="create-btn">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const botName = ref('')
const description = ref('')

const handleSubmit = () => {
  // In a real app, this would create the bot
  console.log('Creating bot:', botName.value, description.value)
  emit('close')
}

const emit = defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 500px;
  max-width: 90%;
}

h2 {
  margin-top: 0;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

textarea {
  min-height: 100px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.cancel-btn {
  background: #f1f1f1;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.create-btn {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>



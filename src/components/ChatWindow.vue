<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formatteDate" :key="doc.id" class="single">
        <span class="create-data">{{ doc.createStamp }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getChatDetails } from "../composables/getChatDetails";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";

export default {
  setup() {
    const { documents, error } = getChatDetails("messages");
    const formatteDate = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createStamp.toDate());
          return { ...doc, createStamp: time };
        });
      }
    });

    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
      console.log(messages.value.scrollTop);
    });

    return { documents, error, formatteDate, messages };
  },
};
</script>

<style>
.chat-window {
  /* height: 100%; */
  padding-left: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
}
.messages {
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 500px;
}
.single {
  margin-bottom: 10px;
  width: 80%;
  padding: 15px;
  border-radius: 10px;
}

.name {
  display: block;
}

.message {
  background-color: rgba(74, 152, 203, 0.719);
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
  border-top-left-radius: 0;
  color: white;
}

.create-data {
  display: block;
  font-size: 12px;
}

@media (768px <= width) {
  .chat-window {
    width: 60%;
    margin: 0 auto;
  }
  .messages {
    max-height: 600px;
  }
}
</style>

<template>
  <form>
    <textarea
      @keypress.enter.prevent="getSubmit"
      placeholder="Napisz wiadomość..."
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import { getUser } from "../composables/getUser";
import { timestamp } from "../firebase/config";
export default {
  setup() {
    const message = ref("");
    const { currentPerson } = getUser();

    const getSubmit = async () => {
      const chatDetails = {
        message: message.value,
        user: currentPerson.value.displayName,
        createStamp: timestamp(),
      };
      console.log(chatDetails);
      message.value = "";
    };

    return { getSubmit, message, currentPerson };
  },
};
</script>

<style></style>

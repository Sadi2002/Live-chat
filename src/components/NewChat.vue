<template>
  <div class="form-color">
    <form>
      <div class="input-box">
        <input
          @keypress.enter.prevent="getSubmit"
          placeholder="Napisz wiadomość..."
          v-model="message"
        />
        <i class="fas fa-paper-plane"></i>
      </div>
    </form>
  </div>
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

<style scoped>
.form-color {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(121, 176, 111, 0.77);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
}

form {
  width: 90%;
  display: flex;
  align-items: center;
}

input {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  padding: 15px 50px 15px 15px;
  font-size: 15px;
  border: none;
  -webkit-box-shadow: inset 2px 2px 7px 1px rgba(66, 68, 90, 0.6);
  -moz-box-shadow: inset 2px 2px 7px 1px rgba(66, 68, 90, 0.6);
  box-shadow: inset 2px 2px 7px 1px rgba(66, 68, 90, 0.6);
}

.input-box {
  position: relative;
  width: 100%;
}

.fa-paper-plane {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  padding: 18px;
  color: rgb(50, 50, 50);
}

@media (768px <= width) {
  .form-color {
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    height: 100px;
  }
}
</style>

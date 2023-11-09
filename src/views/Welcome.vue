<template>
  <div class="welcome container">
    <div>
      <p>Witaj w aplikacji Live Chat</p>
      <p v-if="!showSignUp" class="info">
        Jesteś nowy? Nic nie szkodzi!
        <span @click="switchToSignUp" class="signup-text">Zarejestruj się</span>
      </p>
      <p v-if="!showSignIn" class="info">
        Masz już konto?
        <span @click="switchToSignUp" class="signup-text">Zaloguj się</span>
      </p>
    </div>
    <SignUp v-if="showSignUp" />
    <SignIn v-if="showSignIn" @login="getChat" />
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { SignUp, SignIn },
  setup() {
    const showSignUp = ref(false);
    const showSignIn = ref(true);
    const router = useRouter();

    const switchToSignUp = () => {
      showSignUp.value = !showSignUp.value;
      showSignIn.value = !showSignIn.value;
    };

    const getChat = () => {
      router.push({ name: "Chat" });
    };

    return { showSignUp, showSignIn, switchToSignUp, getChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome p {
  margin-bottom: 20px;
}

.welcome .info {
  font-size: 18px;
}

.signup-text {
  color: rgb(70, 159, 70);
  cursor: pointer;
}
</style>

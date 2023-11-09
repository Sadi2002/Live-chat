<template>
  <form @submit.prevent="getSubmit">
    <div class="form-box">
      <h3 class="signup">Zarejestruj się!</h3>
      <label for="username">Imię i nazwisko</label>
      <input
        type="text"
        v-model="username"
        required
        placeholder="Wpisz imię i nazwisko"
      />
    </div>
    <div class="form-box">
      <label for="username">E-mail</label>
      <input
        type="email"
        v-model="email"
        required
        placeholder="Wpisz adres e-mail"
      />
    </div>
    <div class="form-box">
      <label for="username">Hasło</label>
      <input
        type="password"
        v-model="password"
        required
        placeholder="Wpisz hasło"
      />
    </div>
    <div class="error">{{ error }}</div>
    <button>Zarejestruj się</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useSignup } from "../composables/useSignUp";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { signup, error } = useSignup();

    const username = ref("");
    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const getSubmit = async () => {
      await signup(username.value, email.value, password.value);
      if (password.value.length < 6) {
        error.value = "Hasło powinno składać się z conajmniej 6 znaków!";
      }
      if (!error.value) {
        window.location.reload();
        router.push({ path: "/" });
      }
    };

    return { username, email, password, getSubmit, error };
  },
};
</script>

<style>
form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.form-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  width: 300px;
}
.form-box input {
  height: 40px;
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 20px;
  width: 100%;
  font-size: 16px;
}

.form-box label {
  font-size: 20px;
}

form button {
  width: 300px;
  border-radius: 8px;
  height: 50px;
  margin-top: 30px;
}
</style>

<template>
  <form @submit.prevent="getSubmit">
    <h3 class="login">Zaloguj się!</h3>
    <div class="form-box">
      <label for="email">E-mail</label>
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
    <button>Zaloguj się</button>
  </form>
</template>

<script>
import { useLogin } from "../composables/useLogin";
import { ref } from "vue";

export default {
  setup(props, context) {
    const { error, loginFunction } = useLogin();

    const email = ref("");
    const password = ref("");

    const getSubmit = async () => {
      await loginFunction(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, getSubmit, loginFunction, error };
  },
};
</script>
<style>
form {
  display: flex;
  align-items: center;
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
  padding: 0 20px;
  width: 100%;
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

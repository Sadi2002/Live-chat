import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const loginFunction = async (email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    return res;
  } catch (err) {
    error.value = "Błędne hasło lub login!";
  }
};

const useLogin = () => {
  return { error, loginFunction };
};

export { useLogin };

import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (username, email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) {
      throw new Error("Uzupełnij poprawnie dane");
    }

    await res.user.updateProfile({ displayName: username });
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { signup, error };
};

export { useSignup };

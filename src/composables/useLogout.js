import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    const res = await projectAuth.signOut();
  } catch (err) {
    error.value = err.message;
  }
};

const useLogout = () => {
  return { error, logout };
};

export { useLogout };

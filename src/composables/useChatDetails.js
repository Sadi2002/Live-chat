import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useChatDetails = (collection) => {
  const error = ref(null);

  const addDetails = async (detail) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(detail);
    } catch (err) {
      console.log(err);
      error.value = "Nie można wysłać wiadomości";
    }
  };

  return { error, addDetails };
};

export { useChatDetails };

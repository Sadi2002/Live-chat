import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getChatDetails = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createStamp");

  const unSub = collectionRef.onSnapshot(
    (snap) => {
      let result = [];

      snap.docs.forEach((doc) => {
        doc.data().createStamp && result.push({ ...doc.data(), id: doc.id });
      });

      documents.value = result;

      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Nie można pobrać danych";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      unSub();
    });
  });

  return { documents, error };
};

export { getChatDetails };

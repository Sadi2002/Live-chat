import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const currentPerson = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((user) => {
  console.log(user);
  currentPerson.value = user;
});

const getUser = () => {
  return { currentPerson };
};

export { getUser };

<template>
  <div class="wrapper">
    <NavMobile v-if="showNavMobile" />
    <NavDesktop v-if="showNavDesktop" />
    <ChatWindow />
    <NewChat />
  </div>
</template>

<script>
import NavMobile from "../components/NavMobile.vue";
import NavDesktop from "../components/NavDesktop.vue";
import NewChat from "../components/NewChat.vue";
import ChatWindow from "../components/ChatWindow.vue";

import { getUser } from "../composables/getUser";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { NavMobile, NavDesktop, NewChat, ChatWindow },

  setup() {
    const { currentPerson } = getUser();
    const router = useRouter();
    const showNavMobile = ref(false);
    const showNavDesktop = ref(false);

    watch(currentPerson, () => {
      if (!currentPerson.value) {
        router.push({ name: "Welcome" });
      }
    });

    const takeWidthMobile = () => {
      showNavMobile.value = window.innerWidth < 767;
    };
    const takeWidthDesktop = () => {
      showNavDesktop.value = window.innerWidth >= 767;
    };

    onMounted(() => {
      takeWidthMobile();
      window.addEventListener("resize", takeWidthMobile);
    });

    // Usuń nasłuchiwanie zdarzenia resize przed odmontowaniem komponentu
    onBeforeUnmount(() => {
      window.removeEventListener("resize", takeWidthMobile);
    });
    onMounted(() => {
      takeWidthDesktop();
      window.addEventListener("resize", takeWidthDesktop);
    });

    // Usuń nasłuchiwanie zdarzenia resize przed odmontowaniem komponentu
    onBeforeUnmount(() => {
      window.removeEventListener("resize", takeWidthDesktop);
    });

    return {
      currentPerson,
      takeWidthMobile,
      showNavMobile,
      showNavDesktop,
      takeWidthDesktop,
    };
  },
};
</script>

<style></style>

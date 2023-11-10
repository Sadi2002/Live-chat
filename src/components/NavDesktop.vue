<template>
  <nav v-if="currentPerson">
    <div class="profile">
      <img src="../assets/avatar.png" class="avatar" />
      <h3>{{ currentPerson.displayName }}</h3>
    </div>
    <div class="logout">
      <i @click="backToLog" class="fas fa-sign-out-alt"></i>
    </div>
  </nav>
</template>

<script>
import { useLogout } from "../composables/useLogout";
import { getUser } from "../composables/getUser";

export default {
  setup() {
    const { error, logout } = useLogout();
    const { currentPerson } = getUser();

    const backToLog = async () => {
      await logout();
      if (!error.value) {
      }
    };

    return { error, logout, backToLog, currentPerson };
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.profile .avatar {
  width: 70px;
  padding: 10px;
  border-radius: 50%;
}

nav {
  margin: 0 auto;
  position: relative;
  width: 60%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: 20px;

  background: rgba(115, 179, 115, 0.77);
  justify-content: space-between;
  border-radius: 0 0 20px 20px;
  max-width: 1400px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.logout i {
  font-size: 20px;
}
</style>

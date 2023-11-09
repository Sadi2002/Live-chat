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

<style>
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
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: 20px;
  background: rgba(192, 211, 192, 0.469);
  justify-content: space-between;
}

.logout i {
  font-size: 20px;
}
</style>

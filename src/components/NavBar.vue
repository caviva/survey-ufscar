<template>
  <nav class="bg-gray-800 p-4 flex justify-between items-center">
    <div class="text-white font-bold text-xl">
      {{ $t("appTitle") }}
    </div>

    <div v-if="userId" class="text-gray-300 text-sm ml-4 flex items-center">
      <small>{{ userId }}</small>
      <button
        @click="logout"
        class="ml-4 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition duration-300"
      >
        {{ $t("logout") }}
      </button>
    </div>
    <div v-else class="text-gray-300 text-sm ml-4">
      <small>&nbsp;</small>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

export default {
  name: "Navbar",
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const userId = ref("");
    const selectedLocale = ref(localStorage.getItem("locale") || "en");

    const changeLanguage = () => {
      localStorage.setItem("locale", selectedLocale.value);
      window.location.reload();
    };

    const logout = () => {
      userStore.$reset();
      localStorage.removeItem("userId");
      router.push("/step-one");
    };

    onMounted(() => {
      userId.value = userStore.userId || localStorage.getItem("userId") || "";
    });

    watch(
      () => userStore.userId,
      (newUserId) => {
        userId.value = newUserId;
      }
    );

    return {
      userId,
      selectedLocale,
      changeLanguage,
      logout,
    };
  },
};
</script>

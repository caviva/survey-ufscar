<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12">
    <div
      class="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center max-w-md w-full"
    >
      <h1 class="text-2xl font-bold mb-4">{{ $t("thankYou.title") }}</h1>
      <p class="mb-4">{{ $t("thankYou.message") }}</p>
      <button
        @click="goHome"
        class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
      >
        {{ $t("thankYou.homeButton") }}
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

export default {
  name: "ThankYou",
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const goHome = () => {
      userStore.$reset();
      localStorage.removeItem("userId");
      router.push("/step-one");
      window.location.href = "/";
    };

    onMounted(() => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        router.push("/step-one");
      }
    });

    return {
      goHome,
    };
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>

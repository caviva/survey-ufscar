<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12">
    <div
      class="bg-white text-gray-900 p-6 rounded-lg shadow-lg text-center max-w-md w-full"
    >
      <p class="text-2xl text-center font-bold mb-4">Thank You for Your Participation!</p>
      <p class="text-gray-700 text-justify mb-6">
        We appreciate your time and effort in completing this survey. Your input is
        invaluable in validating the findings of our study on best practices for test case
        quality. By sharing your knowledge and experience, you have contributed
        significantly to advancing the understanding and implementation of effective
        testing practices.
      </p>
      <p class="text-gray-700 text-justify mb-6">
        The information gathered through this survey will help practitioners develop
        better test cases aligned with organizational goals and industry standards.
      </p>
      <p class="text-gray-700 text-justify mb-6">
        Thank you once again for your valuable contribution.
      </p>

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

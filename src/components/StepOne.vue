<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <h1 class="text-2xl font-bold mb-4 text-center">{{ $t("stepOne.title") }}</h1>
      <form @submit.prevent="registerUser" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.gender")
          }}</label>
          <div class="relative">
            <select
              v-model="form.gender"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              required
            >
              <option value="Male">{{ $t("genders.male") }}</option>
              <option value="Female">{{ $t("genders.female") }}</option>
              <option value="Other">{{ $t("genders.other") }}</option>
            </select>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-venus-mars text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.email")
          }}</label>
          <div class="relative">
            <input
              v-model="form.email"
              type="email"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-envelope text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.country")
          }}</label>
          <div class="relative">
            <input
              v-model="form.country"
              type="text"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-globe text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.jobTitle")
          }}</label>
          <div class="relative">
            <input
              v-model="form.jobTitle"
              type="text"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-briefcase text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.educationLevel")
          }}</label>
          <div class="relative">
            <input
              v-model="form.educationLevel"
              type="text"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-graduation-cap text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.yearsOfExperience")
          }}</label>
          <div class="relative">
            <input
              v-model="form.yearsOfExperience"
              type="number"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-briefcase text-gray-500"></i>
            </div>
          </div>
        </div>
        <!-- Termo de Consentimento Livre e Esclarecido (TCLE) -->
        <div class="md:col-span-2 mb-3">
          <div @click="toggleTerms" class="cursor-pointer text-blue-500 underline">
            {{ showTerms ? $t("tcle.hide") : $t("tcle.show") }}
          </div>
          <transition name="fade">
            <div v-if="showTerms" class="mt-2 text-sm text-gray-700">
              <h2 class="font-bold mt-4">{{ $t("tcle.introduction") }}</h2>
              <p>{{ $t("tcle.introductionContent") }}</p>
              <h2 class="font-bold mt-4">{{ $t("tcle.confidentiality") }}</h2>
              <p>{{ $t("tcle.confidentialityContent") }}</p>
              <h2 class="font-bold mt-4">{{ $t("tcle.benefits") }}</h2>
              <p>{{ $t("tcle.benefitsContent") }}</p>
            </div>
          </transition>
        </div>
        <div class="md:col-span-2 flex items-center">
          <input type="checkbox" id="acceptTerms" v-model="acceptTerms" class="mr-2" />
          <label for="acceptTerms" class="text-sm text-gray-700">
            {{ $t("tcle.accept") }}
          </label>
        </div>
        <div v-if="acceptTerms" class="md:col-span-2 flex justify-center items-center">
          <button
            type="submit"
            class="bg-gray-800 text-white p-3 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
          >
            {{ $t("stepOne.register") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";

export default {
  name: "StepOne",
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const form = ref({
      fullName: "",
      gender: "",
      email: "",
      country: "",
      jobTitle: "",
      educationLevel: "",
      age: null,
      yearsOfExperience: null,
    });

    const acceptTerms = ref(false);
    const showTerms = ref(false);

    const toggleTerms = () => {
      showTerms.value = !showTerms.value;
    };

    const registerUser = async () => {
      try {
        const response = await axios.post(
          "https://api-survey-356397522855.herokuapp.com/api/v1/user/register",
          form.value
        );
        const userId = response.data.user._id;
        userStore.setUserId(userId);
        router.push("/step-two");
      } catch (error) {
        console.error("Error registrando el usuario:", error);
      }
    };

    onMounted(() => {
      userStore.$reset();
      localStorage.removeItem("userId");
    });

    return {
      form,
      acceptTerms,
      showTerms,
      toggleTerms,
      registerUser,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

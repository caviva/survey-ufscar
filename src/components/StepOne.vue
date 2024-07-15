<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <p class="text-2xl text-center font-bold mb-4">Welcome to this survey!</p>
      <p class="text-gray-700 text-justify mb-6">
        This survey aims to validate the findings of the study through a structured
        evaluation process of:
      </p>

      <p class="text-xl text-center font-bold mb-4">
        Characterization and Classification of Good Test Cases: Best Practices, Essential
        Features, and Tools
      </p>

      <p class="text-gray-700 text-justify mb-6">
        This study highlights the essential role of test cases in software testing,
        focusing on validating functionality and ensuring software reliability. A
        systematic literature review was conducted to address the lack of clarity and
        consensus on best practices for creating high-quality test cases. The review
        resulted in the identification and refinement of 40 best practices, categorized
        into four groups: Common Sense Practices, Literature-Supported Practices, Test
        Automation and Management Practices, and Business-Oriented Practices. These
        practices aim to help practitioners develop effective test cases aligned with
        organizational goals and industry standards. The study also highlights the role of
        tools in enhancing testing efficiency and the need for further research to define
        essential features of high-quality test case development.
      </p>

      <p class="text-xl text-left font-bold mb-4">Instructions:</p>
      <ul class="list-disc list-inside ml-4 mb-6 text-gray-700 text-justify">
        <li>
          The survey consists of <strong>5 steps</strong>, each evaluating the 40 best
          practices from different perspectives.
        </li>
        <li>
          <strong>Important:</strong> You cannot go back to previous steps. Please make
          sure to complete each step carefully.
        </li>
        <li>The estimated time to complete the survey is <strong>45 minutes</strong>.</li>
      </ul>

      <p class="text-gray-700 text-justify mb-6">
        Your participation is crucial. Completing the entire survey ensures that all data
        is stored correctly and contributes significantly to the study.
      </p>

      <p class="text-gray-700 text-center text-justify mb-6">
        <strong>Thank you for your time and valuable input!</strong>
      </p>

      <br />

      <p class="text-2xl text-center font-bold mb-4">Step 1/5 - User Registration</p>
      <p class="text-gray-700 text-center mb-6">Estimated time: 5 minutes</p>

      <form @submit.prevent="registerUser" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">{{
            $t("stepOne.fullName")
          }}</label>
          <div class="relative">
            <input
              v-model="form.fullName"
              type="text"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
              required
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-user text-gray-500"></i>
            </div>
          </div>
        </div>
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
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
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
              <p class="text-justify">{{ $t("tcle.introductionContent") }}</p>
              <h2 class="font-bold mt-4">{{ $t("tcle.confidentiality") }}</h2>
              <p class="text-justify">{{ $t("tcle.confidentialityContent") }}</p>
              <h2 class="font-bold mt-4">{{ $t("tcle.benefits") }}</h2>
              <p class="text-justify">{{ $t("tcle.benefitsContent") }}</p>
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

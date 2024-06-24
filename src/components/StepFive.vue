<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <h1 class="text-2xl font-bold mb-4 text-center">{{ $t("stepFive.title") }}</h1>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div
          v-for="(practice, index) in practices"
          :key="index"
          class="border border-gray-300 rounded-md p-4"
        >
          <h2 class="text-lg font-semibold">{{ practice.title }}</h2>
          <p class="text-sm text-gray-700">{{ practice.description }}</p>
          <label class="block text-sm font-medium text-gray-700 mt-4">{{
            $t("stepFive.knowTool")
          }}</label>
          <div class="flex items-center mt-2">
            <input
              type="checkbox"
              v-model="practice.knowTool"
              class="mr-2"
              @change="toggleToolInput(index)"
            />
            <span>{{ $t("stepFive.yes") }}</span>
          </div>
          <input
            v-if="practice.knowTool"
            v-model="form[`bp${index + 1}`].observation"
            type="text"
            class="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            placeholder="Type the tool here"
          />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
          >
            {{ $t("stepFive.submit") }}
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
import { useI18n } from "vue-i18n";

export default {
  name: "StepFive",
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const { t } = useI18n({ useScope: "global" });

    const practices = ref([]);
    const form = ref({});

    const initializePractices = () => {
      for (let index = 0; index < 40; index++) {
        practices.value.push({
          title: t(`practices.bp${index + 1}.title`),
          description: t(`practices.bp${index + 1}.description`),
          knowTool: false,
        });
        form.value[`bp${index + 1}`] = { observation: "" };
      }
    };

    const toggleToolInput = (index) => {
      if (!practices.value[index].knowTool) {
        form.value[`bp${index + 1}`].observation = "";
      }
    };

    const submitForm = async () => {
      const userId = userStore.userId || localStorage.getItem("userId");
      if (!userId) {
        console.error("User ID not found");
        return;
      }
      const payload = { userId, ...form.value };

      try {
        await axios.post(
          "https://api-survey-356397522855.herokuapp.com/api/v1/four/register",
          payload
        );
        router.push("/thank-you");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    onMounted(() => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        router.push("/step-one");
      } else {
        initializePractices();
      }
    });

    return {
      practices,
      form,
      submitForm,
      toggleToolInput,
    };
  },
};
</script>

<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <p class="text-2xl text-center font-bold mb-4">
        Step 3/5 - Best Practices Relevance
      </p>
      <p class="text-gray-700 text-center mb-6">Estimated time: 10 minutes</p>
      <p class="text-gray-700 text-justify mb-6">
        Next, you will be presented with a set of practices related to the quality of test
        cases, categorized and classified within the study. Each practice will be
        presented with its description, and the category to which it belongs will be
        defined below. Please choose the level of relevance for each practice based on its
        category. Additionally, you have the option to include an observation for each
        practice if desired. It is important to respond to all the practices to ensure the
        completeness of the survey.
      </p>

      <form @submit.prevent="submitEvaluations" class="space-y-4">
        <div
          v-for="(practice, index) in practices"
          :key="index"
          class="bg-gray-50 p-4 rounded-lg shadow-md"
        >
          <div>
            <h2 class="text-lg font-semibold">{{ practice.title }}</h2>
            <p class="text-sm text-gray-700">{{ practice.description }}</p>
            <br />
            <p class="text-sm">
              <strong>{{ $t("stepThree.categoryName") }}: </strong>
              {{ practice.category }}
            </p>
          </div>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t("stepThree.evaluationCategory")
              }}</label>
              <select
                required
                v-model="form[`bp${index + 1}`].evaluationCategory"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              >
                <option value="veryHigh">{{ $t("evaluationsRelev.veryHigh") }}</option>
                <option value="high">{{ $t("evaluationsRelev.high") }}</option>
                <option value="moderate">{{ $t("evaluationsRelev.moderate") }}</option>
                <option value="low">{{ $t("evaluationsRelev.low") }}</option>
                <option value="veryLow">{{ $t("evaluationsRelev.veryLow") }}</option>
              </select>
            </div>
            <div class="md:col-span-3">
              <label class="block text-sm font-medium text-gray-700">{{
                $t("stepThree.observation")
              }}</label>
              <input
                v-model="form[`bp${index + 1}`].observation"
                type="text"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              />
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
          >
            {{ $t("stepThree.submit") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "StepThree",
  data() {
    return {
      form: {},
      practices: [],
    };
  },
  created() {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      this.$router.push("/step-one");
      return;
    }
    this.initializeForm();
    this.loadPractices();
  },
  methods: {
    initializeForm() {
      for (let index = 1; index <= 25; index++) {
        this.form[`bp${index}`] = {
          evaluationCategory: "",
          evaluationDomain: "",
          evaluationUse: "",
          observation: "",
        };
      }
    },
    loadPractices() {
      for (let index = 1; index <= 25; index++) {
        this.practices.push({
          title: this.$t(`practices.bp${index}.title`),
          description: this.$t(`practices.bp${index}.description`),
          category: this.$t(`practices.bp${index}.category`),
          domain: this.$t(`practices.bp${index}.domain`),
          use: this.$t(`practices.bp${index}.use`),
        });
      }
    },
    async submitEvaluations() {
      const userId = localStorage.getItem("userId");
      const payload = { userId, ...this.form };
      try {
        await axios.post(
          "https://api-survey-356397522855.herokuapp.com/api/v1/two/register",
          payload
        );
        this.$router.push("/step-four");
      } catch (error) {
        console.error("Error submitting evaluations:", error);
      }
    },
    goBack() {
      this.$router.push("/step-two");
    },
  },
};
</script>

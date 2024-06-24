<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <h1 class="text-2xl font-bold mb-4 text-center">{{ $t("stepThree.title") }}</h1>
      <p class="text-center text-gray-700 mb-4">{{ $t("stepThree.instructions") }}</p>
      <form @submit.prevent="submitEvaluations" class="space-y-4">
        <div
          v-for="(practice, index) in practices"
          :key="index"
          class="bg-gray-50 p-4 rounded-lg shadow-md"
        >
          <div>
            <h2 class="text-lg font-semibold">{{ practice.title }}</h2>
            <p class="text-sm text-gray-700">{{ practice.description }}</p>
            <p class="text-sm text-gray-500">
              <strong>{{ $t("stepThree.categoryName") }}: </strong>
              {{ practice.category }}
            </p>
            <p class="text-sm text-gray-500">
              <strong>{{ $t("stepThree.domainName") }}: </strong> {{ practice.domain }}
            </p>
            <p class="text-sm text-gray-500">
              <strong>{{ $t("stepThree.useName") }}: </strong> {{ practice.use }}
            </p>
          </div>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t("stepThree.evaluationCategory")
              }}</label>
              <select
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
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t("stepThree.evaluationDomain")
              }}</label>
              <select
                v-model="form[`bp${index + 1}`].evaluationDomain"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              >
                <option value="veryHigh">{{ $t("evaluationsRelev.veryHigh") }}</option>
                <option value="high">{{ $t("evaluationsRelev.high") }}</option>
                <option value="moderate">{{ $t("evaluationsRelev.moderate") }}</option>
                <option value="low">{{ $t("evaluationsRelev.low") }}</option>
                <option value="veryLow">{{ $t("evaluationsRelev.veryLow") }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">{{
                $t("stepThree.evaluationUse")
              }}</label>
              <select
                v-model="form[`bp${index + 1}`].evaluationUse"
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
          <!--<button
            type="button"
            @click="goBack"
            class="bg-gray-500 text-white p-3 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
          >
            {{ $t("stepTwo.back") }}
          </button>-->
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
      for (let index = 1; index <= 40; index++) {
        this.form[`bp${index}`] = {
          evaluationCategory: "",
          evaluationDomain: "",
          evaluationUse: "",
          observation: "",
        };
      }
    },
    loadPractices() {
      for (let index = 1; index <= 40; index++) {
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

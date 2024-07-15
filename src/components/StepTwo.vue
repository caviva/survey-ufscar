<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <p class="text-2xl text-center font-bold mb-4">
        Step 2/5 - Best Practices Evaluation
      </p>
      <p class="text-gray-700 text-center mb-6">Estimated time: 15 minutes</p>

      <p class="text-justify text-gray-700 mb-4">
        Next, you will be presented with a set of 40 practices related to the quality of
        test cases. Please evaluate each practice by selecting one of the following
        options: Strongly Agree, Agree, Slightly Agree, Neutral, Slightly Disagree,
        Disagree, or Strongly Disagree. Additionally, you have the option to include an
        observation for each practice. If you have questions about a particular practice,
        you can click the 'Show More' link to see a brief description. It is important to
        evaluate all 40 practices to complete the survey.
      </p>
      <form @submit.prevent="submitEvaluation" class="space-y-4">
        <div
          v-for="(practice, index) in practices"
          :key="index"
          class="border border-gray-300 rounded-md p-4"
        >
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-medium">{{ practice.title }}</h2>
            <button type="button" @click="toggleDescription(index)" class="text-blue-500">
              {{ practice.showDescription ? $t("stepTwo.hide") : $t("stepTwo.show") }}
            </button>
          </div>
          <transition name="fade">
            <p v-if="practice.showDescription" class="mt-2 text-sm text-gray-700">
              {{ practice.description }}
            </p>
          </transition>
          <div class="mt-2">
            <label class="block text-sm font-medium text-gray-700">{{
              $t("stepTwo.evaluation")
            }}</label>
            <select
              v-model="form[`bp${index + 1}`].evaluation"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              required
            >
              <option value="Strongly Agree">
                {{ $t("evaluations.stronglyAgree") }}
              </option>
              <option value="Agree">
                {{ $t("evaluations.agree") }}
              </option>
              <option value="Slightly Agree">
                {{ $t("evaluations.slightlyAgree") }}
              </option>
              <option value="Neutral">
                {{ $t("evaluations.neutral") }}
              </option>
              <option value="Slightly Disagree">
                {{ $t("evaluations.slightlyDisagree") }}
              </option>
              <option value="Disagree">
                {{ $t("evaluations.disagree") }}
              </option>
              <option value="Strongly Disagree">
                {{ $t("evaluations.stronglyDisagree") }}
              </option>
            </select>
          </div>
          <div class="mt-2">
            <label class="block text-sm font-medium text-gray-700">{{
              $t("stepTwo.observation")
            }}</label>
            <input
              v-model="form[`bp${index + 1}`].observation"
              type="text"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-gray-800 text-white p-3 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
          >
            {{ $t("stepTwo.submit") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

export default {
  name: "StepTwo",
  data() {
    return {
      practices: [
        {
          title: this.$t("practices.bp1.title"),
          description: this.$t("practices.bp1.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp2.title"),
          description: this.$t("practices.bp2.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp3.title"),
          description: this.$t("practices.bp3.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp4.title"),
          description: this.$t("practices.bp4.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp5.title"),
          description: this.$t("practices.bp5.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp6.title"),
          description: this.$t("practices.bp6.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp7.title"),
          description: this.$t("practices.bp7.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp8.title"),
          description: this.$t("practices.bp8.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp9.title"),
          description: this.$t("practices.bp9.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp10.title"),
          description: this.$t("practices.bp10.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp11.title"),
          description: this.$t("practices.bp11.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp12.title"),
          description: this.$t("practices.bp12.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp13.title"),
          description: this.$t("practices.bp13.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp14.title"),
          description: this.$t("practices.bp14.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp15.title"),
          description: this.$t("practices.bp15.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp16.title"),
          description: this.$t("practices.bp16.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp17.title"),
          description: this.$t("practices.bp17.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp18.title"),
          description: this.$t("practices.bp18.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp19.title"),
          description: this.$t("practices.bp19.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp20.title"),
          description: this.$t("practices.bp20.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp21.title"),
          description: this.$t("practices.bp21.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp22.title"),
          description: this.$t("practices.bp22.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp23.title"),
          description: this.$t("practices.bp23.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp24.title"),
          description: this.$t("practices.bp24.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp25.title"),
          description: this.$t("practices.bp25.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp26.title"),
          description: this.$t("practices.bp26.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp27.title"),
          description: this.$t("practices.bp27.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp28.title"),
          description: this.$t("practices.bp28.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp29.title"),
          description: this.$t("practices.bp29.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp30.title"),
          description: this.$t("practices.bp30.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp31.title"),
          description: this.$t("practices.bp31.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp32.title"),
          description: this.$t("practices.bp32.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp33.title"),
          description: this.$t("practices.bp33.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp34.title"),
          description: this.$t("practices.bp34.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp35.title"),
          description: this.$t("practices.bp35.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp36.title"),
          description: this.$t("practices.bp36.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp37.title"),
          description: this.$t("practices.bp37.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp38.title"),
          description: this.$t("practices.bp38.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp39.title"),
          description: this.$t("practices.bp39.description"),
          showDescription: false,
        },
        {
          title: this.$t("practices.bp40.title"),
          description: this.$t("practices.bp40.description"),
          showDescription: false,
        },
      ],
      form: {
        bp1: { evaluation: "", observation: "" },
        bp2: { evaluation: "", observation: "" },
        bp3: { evaluation: "", observation: "" },
        bp4: { evaluation: "", observation: "" },
        bp5: { evaluation: "", observation: "" },
        bp6: { evaluation: "", observation: "" },
        bp7: { evaluation: "", observation: "" },
        bp8: { evaluation: "", observation: "" },
        bp9: { evaluation: "", observation: "" },
        bp10: { evaluation: "", observation: "" },
        bp11: { evaluation: "", observation: "" },
        bp12: { evaluation: "", observation: "" },
        bp13: { evaluation: "", observation: "" },
        bp14: { evaluation: "", observation: "" },
        bp15: { evaluation: "", observation: "" },
        bp16: { evaluation: "", observation: "" },
        bp17: { evaluation: "", observation: "" },
        bp18: { evaluation: "", observation: "" },
        bp19: { evaluation: "", observation: "" },
        bp20: { evaluation: "", observation: "" },
        bp21: { evaluation: "", observation: "" },
        bp22: { evaluation: "", observation: "" },
        bp23: { evaluation: "", observation: "" },
        bp24: { evaluation: "", observation: "" },
        bp25: { evaluation: "", observation: "" },
        bp26: { evaluation: "", observation: "" },
        bp27: { evaluation: "", observation: "" },
        bp28: { evaluation: "", observation: "" },
        bp29: { evaluation: "", observation: "" },
        bp30: { evaluation: "", observation: "" },
        bp31: { evaluation: "", observation: "" },
        bp32: { evaluation: "", observation: "" },
        bp33: { evaluation: "", observation: "" },
        bp34: { evaluation: "", observation: "" },
        bp35: { evaluation: "", observation: "" },
        bp36: { evaluation: "", observation: "" },
        bp37: { evaluation: "", observation: "" },
        bp38: { evaluation: "", observation: "" },
        bp39: { evaluation: "", observation: "" },
        bp40: { evaluation: "", observation: "" },
      },
    };
  },
  setup() {
    onMounted(() => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        router.push("/step-one");
      }
    });
    const router = useRouter();
    return { router };
  },
  methods: {
    toggleDescription(index) {
      this.practices[index].showDescription = !this.practices[index].showDescription;
    },
    async submitEvaluation() {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("userId not found in localStorage");
        return;
      }
      try {
        console.log("Enviando la evaluación:", userId);
        const response = await axios.post(
          "https://api-survey-356397522855.herokuapp.com/api/v1/one/register",
          {
            userId,
            ...this.form,
          }
        );
        this.router.push("/step-three");
      } catch (error) {
        console.error("Error enviando la evaluación:", error);
      }
    },
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

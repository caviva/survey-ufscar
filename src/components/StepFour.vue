<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <p class="text-2xl text-center font-bold mb-4">
        Step 4/5 - Best Practices Prioritization
      </p>
      <p class="text-gray-700 text-center mb-6">Estimated time: 10 minutes</p>
      <p class="text-gray-700 text-justify mb-6">
        Next, you will be presented with a set of practices related to the quality of test
        cases, organized by their respective categories but presented in random order.
        Please drag and reorder the practices according to the level of priority you
        consider for each one. Each practice is presented with its description and the
        category to which it belongs.
      </p>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">Common sense:</h2>
        <p>
          This category encompasses practices based on common sense, experience, and a
          basic understanding of system requirements. It focuses on practical and
          realistic approaches to test case development.
        </p>
        <br />
        <draggable
          v-model="practices1to16"
          item-key="id"
          :options="{ animation: 200 }"
          class="space-y-4"
        >
          <template #item="{ element, index }">
            <div
              class="bg-gray-50 p-4 rounded-lg shadow-md draggable-item flex items-center"
            >
              <div
                class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-4"
              >
                <span class="text-lg font-bold">{{ index + 1 }}</span>
              </div>
              <div>
                <h2 class="text-lg font-semibold">{{ element.title }}</h2>
                <p class="text-sm text-gray-700">{{ element.description }}</p>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-4">Literature supported:</h2>
        <p>
          Practices in this category are based on research, studies, and Literature within
          software testing.
        </p>
        <br />
        <draggable
          v-model="practices17to27"
          item-key="id"
          :options="{ animation: 200 }"
          class="space-y-4"
        >
          <template #item="{ element, index }">
            <div
              class="bg-gray-50 p-4 rounded-lg shadow-md draggable-item flex items-center"
            >
              <div
                class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-4"
              >
                <span class="text-lg font-bold">{{ index + 1 }}</span>
              </div>
              <div>
                <h2 class="text-lg font-semibold">{{ element.title }}</h2>
                <p class="text-sm text-gray-700">{{ element.description }}</p>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <div class="flex justify-center mt-6">
        <button
          type="button"
          @click="submitOrder"
          class="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-900 transition duration-300"
        >
          {{ $t("stepFour.submit") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import draggable from "vuedraggable";
import { useI18n } from "vue-i18n";

export default {
  name: "StepFour",
  components: {
    draggable,
  },
  setup() {
    const router = useRouter();
    const { t } = useI18n({ useScope: "global" });

    const practices1to16 = ref([]);
    const practices17to27 = ref([]);
    const practices28to33 = ref([]);
    const practices34to40 = ref([]);

    const initializePractices = () => {
      for (let index = 0; index < 40; index++) {
        const practice = {
          id: index + 1,
          title: t(`practices.bp${index + 1}.title`),
          description: t(`practices.bp${index + 1}.description`),
        };
        if (index < 16) {
          practices1to16.value.push(practice);
        } else if (index < 27) {
          practices17to27.value.push(practice);
        } else if (index < 33) {
          practices28to33.value.push(practice);
        } else {
          practices34to40.value.push(practice);
        }
      }
    };

    const submitOrder = async () => {
      const userId = localStorage.getItem("userId");
      const payload = { userId };
      practices1to16.value.forEach((practice, index) => {
        payload[`bp${practice.id}`] = { position: index + 1 };
      });
      practices17to27.value.forEach((practice, index) => {
        payload[`bp${practice.id}`] = { position: index + 1 };
      });
      practices28to33.value.forEach((practice, index) => {
        payload[`bp${practice.id}`] = { position: index + 1 };
      });
      practices34to40.value.forEach((practice, index) => {
        payload[`bp${practice.id}`] = { position: index + 1 };
      });

      try {
        await axios.post(
          "https://api-survey-356397522855.herokuapp.com/api/v1/three/register",
          payload
        );
        router.push("/step-five");
      } catch (error) {
        console.error("Error submitting order:", error);
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
      practices1to16,
      practices17to27,
      practices28to33,
      practices34to40,
      submitOrder,
    };
  },
};
</script>

<style scoped>
.draggable-item {
  cursor: move;
}
</style>

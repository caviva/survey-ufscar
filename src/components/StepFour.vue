<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <h1 class="text-2xl font-bold mb-4 text-center">{{ $t("stepFour.title") }}</h1>
      <p class="text-center text-gray-700 mb-4">{{ $t("stepFour.instructions") }}</p>
      <draggable
        v-model="practices"
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
    const practices = ref([]);

    const initializePractices = () => {
      for (let index = 0; index < 40; index++) {
        practices.value.push({
          id: index + 1,
          title: t(`practices.bp${index + 1}.title`),
          description: t(`practices.bp${index + 1}.description`),
        });
      }
    };

    const submitOrder = async () => {
      const userId = localStorage.getItem("userId");
      const payload = { userId };
      practices.value.forEach((practice, index) => {
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
      practices,
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

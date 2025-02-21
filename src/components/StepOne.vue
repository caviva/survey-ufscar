<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-6 sm:py-12">
    <div class="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <p class="text-2xl text-center font-bold mb-4">Welcome to this survey!</p>
      <p class="text-gray-700 text-justify mb-6">
        This survey aims to validate the findings of the study through a structured
        evaluation process of:
      </p>

      <p class="text-xl text-center font-bold mb-4">
        Best Practices, Essential Features, and Tool Support for Developing Good Test
        Cases
      </p>

      <p>
        This study underscores the essential role of test cases in software testing,
        emphasizing their importance in validating functionality and ensuring software
        reliability. A systematic literature review identified and refined 40 best
        practices, categorized into four groups:
        <strong>Common Sense Practices</strong>,
        <strong>Literature-Supported Practices</strong>,
        <strong>Automation and Management Practices</strong>, and
        <strong>Business-Oriented Practices</strong>. These practices aim to guide
        practitioners in creating effective test cases that align with industry standards
        and organizational goals.
      </p>
      <p>
        To provide clarity, it is crucial to differentiate between
        <strong>code-oriented</strong> and <strong>non-code-oriented</strong> practices:
      </p>
      <ul>
        <li>
          <strong>Code-Oriented Practices</strong>: These focus on the technical and
          detailed aspects of test case creation and execution. They ensure reliability,
          accuracy, and maintainability by directly addressing interactions with code,
          system functionality, and software design. Code-oriented practices typically
          require in-depth knowledge of the software being tested and are key to designing
          efficient and technically sound test cases.
          <ul>
            <li>
              <strong>Common Sense Practices</strong>: Practical approaches based on
              experience and a basic understanding of system requirements.
            </li>
            <li>
              <strong>Literature-Supported Practices</strong>: Evidence-backed practices
              drawn from research and studies in the software testing field.
            </li>
          </ul>
        </li>
        <li>
          <strong>Non-Code-Oriented Practices</strong>: These practices address broader
          testing processes, including planning, management, and alignment with business
          objectives. They emphasize improving testing efficiency and ensuring activities
          align with organizational goals, providing a higher-level perspective to enhance
          overall software quality.
          <ul>
            <li>
              <strong>Automation and Management Practices</strong>: Focused on tools and
              automation techniques to streamline testing.
            </li>
            <li>
              <strong>Business-Oriented Practices</strong>: Prioritize test scenarios that
              impact organizational outcomes and goals.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        Although both <strong>code-oriented</strong> and
        <strong>non-code-oriented</strong> practices play important roles in software
        testing, this survey focuses exclusively on code-oriented practices. This is
        because the essential features of good test cases align directly with
        code-oriented practices, as they involve the technical creation and execution of
        test cases. The practices discussed in this study provide a clear methodological
        framework for improving the quality of test cases by focusing on their technical
        aspects. While non-code-oriented practices contribute to the administrative and
        organizational dimensions of testing, they primarily enhance the application of
        code-oriented practices. Thus, this survey emphasizes code-oriented practices to
        provide actionable insights for creating robust and reliable test cases.
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
        <li>The estimated time to complete the survey is <strong>50 minutes</strong>.</li>
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
          <label class="block text-sm font-medium text-gray-700"> Full Name </label>
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
          <label class="block text-sm font-medium text-gray-700"> Gender </label>
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
          <label class="block text-sm font-medium text-gray-700"> Email </label>
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
          <label class="block text-sm font-medium text-gray-700"> Country </label>
          <div class="relative">
            <select
              v-model="form.country"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              required
            >
              <option value="" disabled selected>Select a country</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="albania">Albania</option>
              <option value="algeria">Algeria</option>
              <option value="andorra">Andorra</option>
              <option value="angola">Angola</option>
              <option value="argentina">Argentina</option>
              <option value="armenia">Armenia</option>
              <option value="australia">Australia</option>
              <option value="austria">Austria</option>
              <option value="azerbaijan">Azerbaijan</option>
              <option value="bahamas">Bahamas</option>
              <option value="bahrain">Bahrain</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="barbados">Barbados</option>
              <option value="belarus">Belarus</option>
              <option value="belgium">Belgium</option>
              <option value="belize">Belize</option>
              <option value="benin">Benin</option>
              <option value="bhutan">Bhutan</option>
              <option value="bolivia">Bolivia</option>
              <option value="bosnia">Bosnia and Herzegovina</option>
              <option value="botswana">Botswana</option>
              <option value="brazil">Brazil</option>
              <option value="bulgaria">Bulgaria</option>
              <option value="burkina_faso">Burkina Faso</option>
              <option value="burundi">Burundi</option>
              <option value="cambodia">Cambodia</option>
              <option value="cameroon">Cameroon</option>
              <option value="canada">Canada</option>
              <option value="chile">Chile</option>
              <option value="china">China</option>
              <option value="colombia">Colombia</option>
              <option value="costa_rica">Costa Rica</option>
              <option value="croatia">Croatia</option>
              <option value="cuba">Cuba</option>
              <option value="cyprus">Cyprus</option>
              <option value="czech_republic">Czech Republic</option>
              <option value="denmark">Denmark</option>
              <option value="dominican_republic">Dominican Republic</option>
              <option value="ecuador">Ecuador</option>
              <option value="egypt">Egypt</option>
              <option value="el_salvador">El Salvador</option>
              <option value="estonia">Estonia</option>
              <option value="ethiopia">Ethiopia</option>
              <option value="finland">Finland</option>
              <option value="france">France</option>
              <option value="germany">Germany</option>
              <option value="greece">Greece</option>
              <option value="guatemala">Guatemala</option>
              <option value="honduras">Honduras</option>
              <option value="hungary">Hungary</option>
              <option value="iceland">Iceland</option>
              <option value="india">India</option>
              <option value="indonesia">Indonesia</option>
              <option value="iran">Iran</option>
              <option value="iraq">Iraq</option>
              <option value="ireland">Ireland</option>
              <option value="israel">Israel</option>
              <option value="italy">Italy</option>
              <option value="jamaica">Jamaica</option>
              <option value="japan">Japan</option>
              <option value="jordan">Jordan</option>
              <option value="kazakhstan">Kazakhstan</option>
              <option value="kenya">Kenya</option>
              <option value="korea_south">South Korea</option>
              <option value="kuwait">Kuwait</option>
              <option value="latvia">Latvia</option>
              <option value="lebanon">Lebanon</option>
              <option value="libya">Libya</option>
              <option value="lithuania">Lithuania</option>
              <option value="luxembourg">Luxembourg</option>
              <option value="malaysia">Malaysia</option>
              <option value="mexico">Mexico</option>
              <option value="morocco">Morocco</option>
              <option value="netherlands">Netherlands</option>
              <option value="new_zealand">New Zealand</option>
              <option value="nicaragua">Nicaragua</option>
              <option value="nigeria">Nigeria</option>
              <option value="norway">Norway</option>
              <option value="pakistan">Pakistan</option>
              <option value="panama">Panama</option>
              <option value="paraguay">Paraguay</option>
              <option value="peru">Peru</option>
              <option value="philippines">Philippines</option>
              <option value="poland">Poland</option>
              <option value="portugal">Portugal</option>
              <option value="qatar">Qatar</option>
              <option value="romania">Romania</option>
              <option value="russia">Russia</option>
              <option value="saudi_arabia">Saudi Arabia</option>
              <option value="serbia">Serbia</option>
              <option value="singapore">Singapore</option>
              <option value="slovakia">Slovakia</option>
              <option value="slovenia">Slovenia</option>
              <option value="south_africa">South Africa</option>
              <option value="spain">Spain</option>
              <option value="sweden">Sweden</option>
              <option value="switzerland">Switzerland</option>
              <option value="thailand">Thailand</option>
              <option value="tunisia">Tunisia</option>
              <option value="turkey">Turkey</option>
              <option value="ukraine">Ukraine</option>
              <option value="united_arab_emirates">United Arab Emirates</option>
              <option value="united_kingdom">United Kingdom</option>
              <option value="united_states">United States</option>
              <option value="uruguay">Uruguay</option>
              <option value="venezuela">Venezuela</option>
              <option value="vietnam">Vietnam</option>
              <option value="yemen">Yemen</option>
              <option value="zimbabwe">Zimbabwe</option>
            </select>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-globe text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700"> Job Title </label>
          <div class="relative">
            <select
              v-model="form.jobTitle"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              required
            >
              <option value="academic">Academic</option>
              <option value="industry">Industry</option>
            </select>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-briefcase text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700"> Education Level </label>
          <div class="relative">
            <select
              v-model="form.educationLevel"
              class="mt-1 block w-full p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
              required
            >
              <option value="" disabled selected>Select an option</option>
              <option value="high_school">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
              <option value="other">Other</option>
            </select>
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <i class="fas fa-graduation-cap text-gray-500"></i>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label class="block text-sm font-medium text-gray-700">
            Years of Experience in Software Testing
          </label>
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
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 20px;
  max-width: 800px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
p {
  text-align: justify;
  margin-bottom: 20px;
}
ul {
  margin-left: 20px;
}
ul li {
  margin-bottom: 10px;
}
</style>

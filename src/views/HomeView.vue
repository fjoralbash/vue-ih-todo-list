<script setup>
import { useUserStore } from "@/stores/user";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import NavBar from "./NavBar.vue";

import Button from "primevue/button";

const userStore = useUserStore();
const newEmail = ref("");
const newPassword = ref("");

const currentEmail = ref("");
const currentPassword = ref("");
const router = useRouter();

onMounted(() => {
  // Reset authentication status when returning to login/signup page
  userStore.resetAuthenticationStatus();
});
const changeView = () => {
  router.push({ path: "/mainview" });
};

const handleSignIn = async () => {
  await userStore.signIn(currentEmail.value, currentPassword.value);
  if (userStore.authenticationStatus === true) {
    changeView();
    console.log(userStore.authenticationStatus);
  }
};
const handleCreateUser = async () => {
  await userStore.createNewUser(newEmail.value, newPassword.value);
  if (userStore.authenticationStatus === true) {
    changeView();
    console.log(userStore.authenticationStatus);
  }
};
let toggleTrue = ref(true);
function toggleSignOption() {
  if (toggleTrue.value === true) {
    return (toggleTrue.value = false);
  } else {
    return (toggleTrue.value = true);
  }
}
</script>

<template>
 <div style=" 
 background-image: url('https://images.pexels.com/photos/4464438/pexels-photo-4464438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
background-size: cover; background-position: center;"
>
    <NavBar></NavBar>

    <div
      v-if="toggleTrue"
      class="flex items-center min-h-screen font-mono"
    >
      <div class="container mx-auto">
        <div
          class="max-w-md mx-auto my-10"
        >
          <div class="text-center">
            <h1
              class="my-3 text-5xl font-semibold pacifico-font"
            >
              My TaskMaster
            </h1>
            <p class="text-blue-500">
              Sign in to your account
            </p>
          </div>
          <div class="m-7">
            <form action="">
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm text-black-600"
                  >Email Address</label
                >
                <input
                  v-model="currentEmail"
                  type="email"
                  name="email"
                  placeholder="user@email.com"
                  class="w-full px-3 py-2 placeholder-blue-150 border border-gray-400 rounded-full focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div class="mb-6">
                <div class="flex justify-between mb-2">
                  <label
                    for="password"
                    class="text-sm text-gray-600"
                    >Password</label
                  >
                  <a
                    href="#!"
                    class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500"
                    >Forgot password?</a
                  >
                </div>
                <input
                  v-model="currentPassword"
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  class="w-full px-3 py-2 placeholder-blue-150 border border-gray-400 rounded-full focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div class="mb-6">
                <button
                  @click="handleSignIn"
                  type="button"
                  class="w-full px-3 py-4 text-black bg-blue-200 rounded-full focus:bg-green-500 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p class="text-sm text-center text-gray-400">
                You not have have an account yet?
                <br> 
                <a
                  @click="toggleSignOption"
                  class="cursor-pointer text-black focus:outline-none"
                  >Sign up now</a
                >!
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
    >
      <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
          <div class="text-center">
            <h1
              class="my-3 text-3xl font-semibold text-gray-700"
            >
              Create your account
            </h1>
            <p class="text-blue-500 font-sans">
              Create your account and start keeping track of your tasks!
            </p>
          </div>
          <div class="m-7">
            <form action="">
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm text-black-600"
                  >Email Address</label
                >
                <input
                  type="email"
                  name="email"
                  v-model="newEmail"
                  placeholder="your@email.com"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-blue-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div class="mb-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-black-600"
                    >Password</label
                  >
                </div>
                <input
                  type="password"
                  name="password"
                  v-model="newPassword"
                  placeholder="Your Password"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-blue-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div class="mb-6">
                <button
                  @click="handleCreateUser"
                  type="button"
                  class="w-full px-3 py-4 text-white bg-blue-200 rounded-full focus:bg-green-600 focus:outline-none"
                >
                  Sign up
                </button>
              </div>
              <p class="text-center text-gray-400">
                You have an account?
                <a
                  @click="toggleSignOption"
                  class="cursor-pointer text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500"
                  >Sign in</a
                >.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


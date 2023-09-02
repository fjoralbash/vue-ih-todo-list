<script setup>
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/user";
import { ref, onMounted, watch } from "vue";
const userStore = useUserStore();
const router = useRouter();



const changeView = () => {
  router.push({ path: "/" });
};
onMounted(() => {});
const signOutUser = async () => {
  console.log("Sign Out clicked");
  await userStore.signOut();
  changeView();
};
</script>
<template>
  
  <div class="flex justify-end d container">
    <div
      class="flex justify-end max-w-4xl pt-5"
    >
 

      <div
        class="cursor-pointer"
        v-tooltip.bottom="'Sign Out'"
        @click="signOutUser()"
      >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-12 h-12">
  <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2" />
  <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M30 12l10 10-10 10M40 22H10" />
</svg>
      </div>
    </div>
  </div>
</template>
<style></style>

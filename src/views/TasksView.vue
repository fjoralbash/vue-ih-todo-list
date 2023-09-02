<script setup>
import { ref, onMounted, watch } from "vue";
import { useTaskStore } from "@/stores/task";

import Checkbox from "primevue/checkbox";
import supabase from "@/lib/supabase";

import { useToast } from "primevue/usetoast";

import Toast from "primevue/toast";

const taskStore = useTaskStore();

onMounted(async () => {
  // Fetch tasks from Supabase
  await taskStore.fetchTasks();
});

const toast = useToast();
const taskId = taskStore.tasks.id;

const deleteCurrentTask = async (taskId) => {
  await taskStore.deleteTask(taskId);
};

const updateCurrentTask = async (taskId, currentName) => {
  const newName = window.prompt("Edit the task", currentName);
  if (newName) {
    await taskStore.updateTask(taskId, newName);
  }
};

const taskCheckboxes = ref([]); // Array to hold individual checkbox states

onMounted(async () => {
  // Fetch the completion status from Supabase
  const { data, error } = await supabase.from("tasks").select("is_complete");
  if (error) {
    console.log("Error fetching completion status:", error);
  } else {
    // Populate the taskCheckboxes array with completion status values
    taskCheckboxes.value = data.map((task) => task.is_complete);
  }
});
const updateStatus = async (index, taskId) => {
  const isCompleted = taskCheckboxes.value[index];
  await taskStore.updateComplitionStatus(taskId, isCompleted);
};
const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Saved",
    detail: "Your task has been edited",
    life: 3000,
  });
};
const showInfo = () => {
  toast.add({
    severity: "info",
    summary: "Delete",
    detail: "Your task has been deleted",
    life: 1000,
  });
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<template>
  <div class="flex flex-wrap" style=" ;background-color: lightblue; background-position: center; width: 100%;">
    <div
      v-for="(task, index) in taskStore.tasks"
      :key="task.id"
      class="animation-duration-500 flex wrap"
    >
      <div
        class="w-72 h-48 m-4 static square-lg"
      >
        <div
          class="bg-stone-50 w-72 h-21 absolute square-lg duration-150"
        >
          <h1 class="m-4 text-2xl font-bold">{{ task.title }}</h1>
          <hr class="m-4 rounded-2xl border-t-2" />
          <p class="m-4 text-sm">
            created : {{ formatDate(task.inserted_at) }}
          </p>
          <div class="flex justify-content-between gap-5">
            <div class="p-2">
              <Checkbox
                v-model="taskCheckboxes[index]"
                :binary="true"
                v-tooltip.top="'Completed'"
                @change="updateStatus(index, task.id)"
              />
            </div>
            <div class="flex">
              <Toast />
              <div class="mt-2">
                <i
                  severity="success"
                  class="pi pi-file-edit cursor-pointer"
                  v-tooltip.top="'Edit'"
                  style="font-size: 0, 5rem"
                  @click="
                    updateCurrentTask(task.id, task.title);
                    showSuccess();
                  "
                ></i>
              </div>

              <div class="col-2">
                <i
                  class="pi pi-trash cursor-pointer"
                  v-tooltip.top="'Delete'"
                  style="font-size: 0, 5rem"
                  @click="
                    deleteCurrentTask(task.id);
                    showInfo();
                  "
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

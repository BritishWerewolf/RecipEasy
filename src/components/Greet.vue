<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const recipes = ref("");

async function get_recipes() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    recipes.value = await invoke("get_recipes");
}
</script>

<template>
  <button @click="get_recipes">Get recipes</button>

  <p>{{ recipes }}</p>
</template>

<template>
  <div>
    <h2>Vue → Spring Boot API 통신 테스트</h2>
    <p>{{ result }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const result = ref("");
const { $axios } = useNuxtApp();

onMounted(async () => {
  try {
    const res = await $axios.get("/api/vueTest");
    result.value = res.data;
  } catch (error) {
    console.error("API 호출 실패:", error);
  }
});
</script>

<style scoped>
h2 {
  color: #4e73df;
}
</style>

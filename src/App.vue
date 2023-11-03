<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from './components/Header.vue';

const pages = ref([
  'membros', 
  'galeria'
])

</script>

<template>

    <!-- <RouterLink to="/">Home</RouterLink> -->
    <Header :pages="pages"/>

  <!-- <RouterView /> -->
</template>


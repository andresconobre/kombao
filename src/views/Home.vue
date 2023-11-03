<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Header from '../components/Header.vue';
import { pages } from '../composables/index'

</script>

<template>

    <!-- <RouterLink to="/">Home</RouterLink> -->
    <Header :pages="pages"/>
    
  <!-- <RouterView /> -->
</template>


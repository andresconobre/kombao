<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import Header from '../components/Header.vue';
import HomePage from '../components/HomePage.vue';
import { pages } from '../composables/index'

</script>

<template>

    <!-- <RouterLink to="/">Home</RouterLink> -->
    <Header :pages="pages"/>
    <RouterView />
    
</template>


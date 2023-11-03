<script setup lang="ts">
    import { RouterLink } from "vue-router";
    const props = defineProps(['pages'])
</script>

<template>
    <header class="bg-red-950 text-white fixed top-0 w-full">
        <div class="container py-6 flex items-center justify-between">
            <RouterLink to="/">
                Kombão
            </RouterLink>
            <ul class="flex items-center justify-between gap-8">
                <li v-for="(page, index) in pages" :key="index">
                    <RouterLink :to="page" class="uppercase hover-underline-animation">{{page}}</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>
<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router";
    const props = defineProps(['pages'])
</script>

<template>
    <header class="bg-red-950 text-white">
        <div class="container py-3 flex items-center justify-between">
            <h1>Kombão</h1>
            <ul class="flex items-center justify-between gap-8">
                <li v-for="(page, index) in pages" :key="index">
                    <!-- <a href="" class="uppercase">{{page}}</a> -->
                    <RouterLink :to="page" class="uppercase">{{page}}</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>
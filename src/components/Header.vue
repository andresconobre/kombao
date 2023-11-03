<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import Logo from './icons/LogoKombao.vue'
    const props = defineProps(['pages'])
</script>

<template>
    <header class="py-6 z-50 bg-transparent shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[7.2px] font-raleway font-semibold text-lg text-black fixed top-0 w-full">
        <div class="container flex items-center justify-between">
            <RouterLink to="/">
                <Logo />
            </RouterLink>
            <ul class="flex items-center justify-between gap-8">
                <li v-for="(page, index) in pages" :key="index">
                    <RouterLink :to="page" class="uppercase hover-underline-animation">{{page}}</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>
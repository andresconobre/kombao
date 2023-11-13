<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from './icons/LogoKombao.vue'
import ThemeButton from '../components/ThemeButton.vue'
const props = defineProps(['pages'])
</script>

<template>
    <header class="py-6 z-50 dark:bg-gray-dark bg-gray-light shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[7.2px] font-raleway font-semibold text-lg dark:text-gray-light text-gray-dark fixed top-0 w-full">
        <div class="container flex items-center justify-between">
            <RouterLink to="/">
                <Logo />
            </RouterLink>
            <ul class="hidden lg:flex items-center justify-between gap-8">
                <li v-for="(page, index) in pages" :key="index">
                    <RouterLink :to="page" class="uppercase hover-underline-animation">{{page === 'videos' ? 'vídeos' : page}}</RouterLink>
                </li>
                <li>
                    <ThemeButton/>
                </li>
            </ul>
            <div class="block lg:hidden">
                <ThemeButton/>
            </div>
        </div>
    </header>
</template>
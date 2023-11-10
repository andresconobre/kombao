<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import Logo from './icons/LogoKombao.vue'
    import DarkIcon from './icons/DarkIcon.vue'
    import LightIcon from './icons/LightIcon.vue'
    import { onMounted, ref } from "vue";
    const props = defineProps(['pages'])
    const html = document.getElementById('html')
    const isDark = ref(null)

    function changeMode() {
        html?.classList.toggle('dark')
        if (html.classList.contains('dark')) {
            isDark.value = true 
            localStorage.setItem('theme', 'dark');
        } else {
            isDark.value = false
            localStorage.setItem('theme', 'light');  
        }
    }

    onMounted(() => {
        if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
            html.classList.add('dark')
            isDark.value = true
        } else {
            html.classList.remove('dark')
            isDark.value = false
        }
    })
</script>

<template>
    <header class="py-6 z-50 dark:bg-gray-dark bg-gray-light shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[7.2px] font-raleway font-semibold text-lg dark:text-gray-light text-gray-dark fixed top-0 w-full">
        <div class="container flex items-center justify-between">
            <RouterLink to="/">
                <Logo />
            </RouterLink>
            <ul class="flex items-center justify-between gap-8">
                <li v-for="(page, index) in pages" :key="index">
                    <RouterLink :to="page" class="uppercase hover-underline-animation">{{page === 'videos' ? 'vídeos' : page}}</RouterLink>
                </li>
                <li>
                    <button @click="changeMode" class="rounded-full dark-neumorphism light-neumorphism w-10 h-10 grid place-items-center">
                        <DarkIcon v-show="!isDark" class="w-5 h-5 fill-gray-dark"/>
                        <LightIcon v-show="isDark" class="w-5 h-5"/>
                    </button>
                </li>
            </ul>
        </div>
    </header>
</template>
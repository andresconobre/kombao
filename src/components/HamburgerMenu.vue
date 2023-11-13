<script setup lang="ts">
import { ref } from "vue"
import LogoKombao from "./icons/LogoKombao.vue"
const props = defineProps(['pages'])
const isOpen = ref(false)
const html = document.getElementById('html')
const buttonClose = ref(null)

const openMenu = () => {
    isOpen.value = true
    html?.classList.add('overflow-hidden')
}

const closeMenu = (e: PointerEvent) => {
    isOpen.value = false
    html?.classList.remove('overflow-hidden')
    
    // if (e.target === buttonClose.value || !e.target.contains())
}

</script>

<template>
    <button @click="openMenu" class="w-8 h-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </button>
    <div v-show="isOpen" class="fixed inset-0 h-screen">
        <nav class="w-full dark:bg-gray-dark bg-gray-light h-screen relative z-50 shadow-2xl"> <!-- w-11/12 md:w-4/5 -->
            <div class="p-12">
                <div class="flex items-center justify-between">
                    <RouterLink to="/" @click="closeMenu">
                        <LogoKombao/>   
                    </RouterLink>
                    <button @click="closeMenu" ref="buttonClose" class="text-2xl">X</button>
                </div>
                <nav>
                    <ul class="pt-8 pl-4 list-image-[url('/img/favicon-16x16.png')] flex flex-col gap-2 font-semibold text-xl dark:text-gray-light text-gray-dark">
                       <li v-for="(page, index) in pages" :key="index" class="pl-1">
                            <RouterLink :to="page" @click="closeMenu" class="uppercase hover-underline-animation">{{page === 'videos' ? 'vídeos' : page}}</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    path {
        @apply dark:stroke-gray-light stroke-gray-dark
    }
</style>
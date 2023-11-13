<script setup>
import { onMounted, ref } from "vue";
import DarkIcon from './icons/DarkIcon.vue'
import LightIcon from './icons/LightIcon.vue'
const html = document.getElementById('html')
const isDark = ref(true)
function changeMode() {
    html?.classList.toggle('dark')
    if (html?.classList.contains('dark')) {
        isDark.value = true 
        localStorage.setItem('theme', 'dark');
    } else {
        isDark.value = false
        localStorage.setItem('theme', 'light');  
    }
}

onMounted(() => {
    if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null) {
        html?.classList.add('dark')
        isDark.value = true
    } else {
        html?.classList.remove('dark')
        isDark.value = false
    }
})
</script>

<template>
    <button @click="changeMode" class="rounded-full dark-neumorphism light-neumorphism w-10 h-10 grid place-items-center">
        <DarkIcon v-show="!isDark" class="w-5 h-5 fill-gray-dark"/>
        <LightIcon v-show="isDark" class="w-5 h-5"/>
        <span class="sr-only">Alterar para modo {{isDark ? 'claro' : 'escuro'}}</span>
    </button>
</template>
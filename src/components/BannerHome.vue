<script setup lang='ts'>
import { ref } from "vue";
import { frases } from '../composables/index'
    
    const randomIndex: number = Math.floor(Math.random() * frases.value.length);
    const frase: string = frases.value[randomIndex];
    
</script>

<template>
    <div class="grid place-items-center h-screen font-space-mono">
        <div class="container text-center">
            <h1 class="inline-block text-flicker-in-glow text-6xl md:text-7xl font-bold dark:text-gray-light text-gray-dark">KOMBÃO</h1>
            <h2 class="mx-auto w-full md:w-2/3 pt-6 focus-in-contract-bck text-2xl dark:text-gray-light text-gray-dark">{{frase}}</h2>
        </div>
    </div>
</template>

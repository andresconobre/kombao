<script setup lang="ts">
import { computed } from 'vue'
import { membros } from '../composables/index'

const name = computed((nome: string) => {
    return nome.normalize('NFD').toLowerCase()
})
</script>

<template>
    <div class="grid place-items-center h-screen font-space-mono">
        <div class="container">
            <h2 class="text-center font-bold text-3xl text-black">Membros</h2>
            <div class="relative flex justify-center items-center px-8 w-5/6 m-auto mt-16">
                <template v-for="({ nome, lowername }, index) in membros" :key="index">
                    <img class="w-14 sm:w-20 md:w-24 lg:w-28 rounded-full max-w-none shadow-md -ml-6 md:-ml-8 hover:-translate-x-2 md:hover:-translate-x-4 border-white border-2 transform transition aspect-square object-cover" :src="`/img/${lowername}/${lowername}1.png`" :alt="nome">
                </template>
            </div>
        </div>
    </div>
</template>
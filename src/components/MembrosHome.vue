<script setup lang="ts">
import { computed } from 'vue'
import { membros } from '../composables/index'

</script>

<template>
    <div class="grid place-items-center h-screen font-space-mono">
        <div class="container">
            <h2 class="text-center font-bold text-3xl text-black">Membros</h2>
            <div class="relative flex justify-center items-center px-8 w-5/6 m-auto mt-16">
                <div v-for="({ nome, lowername }, index) in membros" :key="index" class="-ml-6 md:-ml-8 hover:-translate-x-2 md:hover:-translate-x-4 transform transition group">
                    <RouterLink :to="`/membros/${lowername}`">
                        <img class="w-14 sm:w-20 md:w-24 lg:w-28 rounded-full max-w-none shadow-md aspect-square object-cover group-hover:border-black border-white border-2 group-hover:scale-110" :src="`/img/${lowername}/${lowername}1.png`" :alt="nome">
                        <p class="relative text-center invisible group-hover:visible font-medium text-lg capitalize mt-4 bg-black rounded-md text-white tooltip-arrow">{{nome}}</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
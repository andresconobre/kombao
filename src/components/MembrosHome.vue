<script setup lang="ts">
import { membros } from '../composables/index'

</script>

<template>
    <div class="grid place-items-center h-screen font-space-mono">
        <div class="container">
            <h2 class="text-center font-bold text-3xl dark:text-gray-light text-gray-dark">Membros</h2>
            <div class="relative flex justify-center items-center px-8 w-5/6 m-auto mt-16" :class="{'flex-wrap': membros.length > 13}">
                <div v-for="({ nome, lowername }, index) in membros" :key="index" class="-ml-6 md:-ml-8 hover:-translate-x-2 md:hover:-translate-x-4 transform transition group">
                    <!-- <RouterLink :to="`/membros/${lowername}`"> -->
                        <img class="w-20 md:w-24 lg:w-28 rounded-full max-w-none shadow-md aspect-square object-cover dark:group-hover:border-gray-light group-hover:border-gray-dark dark:border-black border-white border-2 group-hover:scale-110 z-10 relative" :src="`/img/${lowername}/${lowername}1.png`" :alt="nome">
                        <img v-if="lowername === 'nicolas'" src="/img/boneco.png" alt="Boneco" class="absolute top-0 right-3 h-6 z-0 rotate-45">
                        <p class="relative tooltip tooltip-arrow">{{nome}}</p>
                    <!-- </RouterLink> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { membros } from '../composables/index'

</script>

<template>
    <div class="grid place-items-center h-screen font-space-mono">
        <div class="container">
            <h2 class="text-center font-bold text-3xl dark:text-gray-light text-gray-dark">Membros</h2>
            <div class="relative md:flex justify-center items-center lg:px-8 lg:w-5/6 m-auto mt-16 flex-wrap grid grid-cols-2 place-items-center">
                <div v-for="({ nome, lowername }, index) in membros" :key="index" class="md:-ml-8 md:hover:-translate-x-4 transform transition group grid md:block place-items-center pb-4 md:pb-0">
                    <!-- <RouterLink :to="`/membros/${lowername}`"> -->
                        <img class="w-24 lg:w-28 rounded-full max-w-none shadow-md aspect-square object-cover md:dark:group-hover:border-gray-light md:group-hover:border-gray-dark dark:border-white border-black border-2 md:group-hover:scale-110 z-10 relative" :src="`/img/${lowername}/${lowername}1.png`" :alt="nome">
                        <img v-if="lowername === 'nicolas'" src="/img/boneco.png" alt="Boneco" class="absolute top-0 right-3 h-6 z-0 rotate-45">
                        <p class="relative tooltip tooltip-arrow">{{nome}}</p>
                    <!-- </RouterLink> -->
                </div>
            </div>
        </div>
    </div>
</template>
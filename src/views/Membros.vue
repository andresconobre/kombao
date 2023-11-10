<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { membros } from '../composables/index'
import 'swiper/css';
import 'swiper/css/navigation';
import { ref } from 'vue';

const modules = ref([Navigation])

</script>

<template>
    <div class="pt-header font-space-mono">
        <div class="container py-12">
            <h2 class="text-center font-bold text-4xl dark:text-gray-light text-gray-dark pb-8">Membros</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div v-for="({ nome, lowername, fotos, tags }, index) in membros" :key="index">
                    <!-- <RouterLink :to="`/membros/${lowername}`"> -->
                        <swiper :slides-per-view="1" class="rounded-md group border-2 dark:border-gray-light border-gray-dark bg-gray-light relative" navigation :modules="modules">
                            <swiper :breakpoints="{ 0:{ slidesPerView:1.5 }, 768:{ slidesPerView:2 } }" :space-between="20" loop autoplay :modules="[Autoplay]" class="!absolute w-full top-0 !px-4 mt-2 !opacity-0 group-hover:!opacity-100 transition duration-300 hover:cursor-grab">
                                <swiper-slide v-for="tag in tags" :key="tag">
                                    <p class="text-center bg-white rounded-lg font-raleway text-base border border-black">{{tag}}</p>
                                </swiper-slide>
                            </swiper>

                            <swiper-slide v-for="foto in fotos" :key="foto">
                                <img :src="`/img/${lowername}/${lowername}${foto}.png`" :alt="nome" class="object-cover aspect-[3/4] h-full w-full transition duration-300 ease-in-out group-hover:-translate-y-10 z-10 relative hover:cursor-grab">
                            </swiper-slide>
                            <p class="absolute bottom-2 text-black text-center w-full">{{nome}} <img v-if="lowername === 'nicolas'" src="/img/boneco.png" alt="Boneco" class="h-4 absolute right-1 top-1/2 -translate-y-1/2"></p>
                        </swiper>
                    <!-- </RouterLink> -->
                </div>
            </div>
        </div>
    </div>
    
</template>
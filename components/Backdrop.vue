<script setup>
const props = defineProps({
  title: String,
  img: String
})
const generateImagePath = (img) => `https://image.tmdb.org/t/p/original${img}`;
</script>

<template>
    <div class="relative mb-3">
        <img :src="generateImagePath(img)"
            class="w-full rounded-xl lg:rounded-3xl relative opacity-90" />
        <p class="bottom-4 text-2xl left-5 hover:text-gray-300 active:text-white cursor-pointer  absolute">{{ title || "No props" }}</p>
    </div>
</template>
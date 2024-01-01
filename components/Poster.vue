<script setup>
const props = defineProps({
  title: String,
  img: String
})
const generateImagePath = (img) => `https://image.tmdb.org/t/p/original${img}`;
</script>

<template>
    <div class="w-full rounded-xl lg:rounded-xl relative mb-7 lg:mb-2   ">
        <img :src="generateImagePath(img)"
            class="w-full rounded-xl lg:rounded-xl relative" />
        <p class="bottom-4 text-lg left-5 hover:text-gray-300 active:text-white cursor-pointer  absolute">{{title || 'No props'}}</p>
    </div>
</template>
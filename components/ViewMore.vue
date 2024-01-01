<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-normal">{{ text || 'no props' }}</h1>
        <div class="flex gap-2 items-center cursor-pointer text-red-500 hover:text-red-700 active:text-red-500 ">
            <p class="">See All</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                class="w-5 h-5 rounded-full ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
  item: Object
})
</script>

<template>
    <div class="lg:columns-2 mt-3">
        <Backdrop :img="item.backdrop_path" :title="item.title" v-for="(item, index) in item.results.slice(0,2)" :key="index"/>
    </div>
</template>
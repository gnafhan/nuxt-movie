<script setup>
const props = defineProps({
  item: Object
})
</script>

<template>
    <div class="mt-10">
        <ViewMore text="Trending" />
        <TwoPicture :item="item" />
      </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  item: Object
})

</script>

<template>
    <div class="mt-10">
        <ViewMore :text="title" />
        <div class="lg:columns-5 mt-3">
          <Poster :img="item.poster_path" :title="item.title || item.name" v-for="(item, index) in item.results.slice(0,5)" :key="index" />
        </div>
        <div class="lg:columns-5 hidden lg:block mt-3">
            <Poster :img="item.poster_path" :title="item.title || item.name" v-for="(item, index) in item.results.slice(5,10)" :key="index" />
        </div>
      </div>
</template>
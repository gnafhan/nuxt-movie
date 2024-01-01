<script setup lang="ts">
    const { data } = await useFetch('/api/all')
</script>

<template>
      <Trending :item="data.trending" />
      <TenPosters :item="data.movies" title="Movies" />
      <TenPosters :item="data.tvShows" title="Tv Series" />
</template>
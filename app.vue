<template lang="pug">

.app
MainHeader
NuxtLayout
  NuxtPage
MainFooter
NuxtLoadingIndicator(color="var(--brand)" :height="3")
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Tom Brown | Award Winning master stone carver, sculptor, artist.` : 'Tom Brown | Award Winning master stone carver, sculptor, artist.'
  }
})
</script>


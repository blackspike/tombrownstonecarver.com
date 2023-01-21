<template lang="pug">

main.page

  //- Sculpture
  Hero(
    title="Sculpture"
    image="/images/sculpture/sculpture-hero"
  )
    template(v-slot:intro)
      p Tom creates stone sculpture for exterior facades, interiors and gardens, his sculptural work focusing on the sheer and permanent beauty of form in nature.
    template(v-slot:content)
      p He aims to express the power and vibrancy of the living world through the tactile medium of stone in all its beauty & timeless variety.

      p He is proud to swim against the present tide of the conceptual in current art practice.

</template>

<script setup>
// const xxx = ref()
// const props = defineProps()
</script>

<style lang="scss" scoped>
// .page {
// }
</style>
<template lang="pug">

main.page

  //- About
  Hero(
    title="Blog"
    image="/images/about/about-hero"
  )
    template(v-slot:intro)
      p Tom provides architectural stone About services for architectural projects (from Grade One listed buildings to period domestic properties) repairing, restoring and designing ornamental details and features in stone, as well as in brick or plaster.
    template(v-slot:content)
      p As well as restoring existing historic fabric, Tom creates new ornamental features from ornate classical fireplaces to Corinthian Capitals.

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
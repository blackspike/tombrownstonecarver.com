<template lang="pug">

main.page

  //- courses
  Hero(
    title="Courses"
    image="/images/courses/courses-hero"
  )
    template(v-slot:intro)
      p Tom has established a workshop in Brighton from which he runs weekend courses in stone carving as well as private tuition sessions, teaching traditional skills to carvers of all levels, from  experienced craftsmen to those who have never picked up a mallet &amp; chisel.

    template(v-slot:content)
      p Tom believes the meditative and patient practice of stone carving is both rewarding and therapeutic, its time-honoured processes improving focus and cultivating calm, through mindful, creative engagement with an ancient and natural material.

</template>

<script setup>
// const xxx = ref()
// const props = defineProps()
</script>

<style lang="scss" scoped>
// .page {
// }
</style>
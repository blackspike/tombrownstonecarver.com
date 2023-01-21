<template lang="pug">

.intro

  //- Wrapper
  .intro__wrapper.container

    //- intro
    .intro__content
      slot(name="content")

    //- title
    h2.intro__title {{ title }}

</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.intro {
  align-items: flex-end;
  background-color: var(--white);
  display: flex;
  min-height: 100vh;
  padding-block: var(--size-fluid-5);

  &__wrapper {
    align-items: end;
    display: grid;
    grid-template-areas: 'title content';
    grid-template-columns: 1fr 1fr;
  }

  &__content {
    font-size: var(--font-size-5);
    grid-area: content;
    line-height: var(--font-lineheight-4);
    max-width: var(--size-content-3);
  }

  &__title {
    font-size: var(--font-size-fluid-3);
    grid-area: title;
  }
}
</style>
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
  background-color: var(--white);
  padding-block: var(--size-13) var(--size-12);

  &__wrapper {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--size-9);

    @include media-query('lg') {
      grid-template-areas: 'title content';
      align-items: end;
      display: grid;
      grid-template-columns: 1fr 1fr;

    }
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
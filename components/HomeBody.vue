<template lang="pug">

.body(:class="{ 'reverse' : reverse }")

  //- Image
  ImageSingle.body__image(
  :path="image"
  :width="1200"
  :height="1200"
  type="jpg"
  :avif="true"
  :webp="true"
  fit="cover"
  :lazy="true"
  )

  //- Intro
  .body__content

    //- title
    h2.body__title {{ title }}

    //- content
    .body__intro
      slot(name="intro")

    //- Body
    .body__body
      slot(name="content")

    //- Link
    nuxt-link.body__link(:to="link") {{ linkTitle }}

</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  linkTitle: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
.body {
  align-items: center;
  background-color: var(--white);
  display: grid;
  gap: var(--size-9);
  grid-template-areas: 'image' 'content';

  @include media-query('lg') {
    gap: 0;
    grid-template-areas: 'image content';
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }

  &.reverse {
    @include media-query('lg') {
      grid-template-areas: 'content image';
    }
  }

  &__image {
    grid-area: image;
    height: 100%;
    overflow: hidden;
  }

  &__content {
    font-size: var(--font-size-2);
    grid-area: content;
    line-height: var(--font-lineheight-3);
    padding: var(--size-fluid-5);
    max-width: var(--size-content-3);

    .reverse & {
      @include media-query('md') {
        justify-self: end;
      }
    }
  }

  &__title {
    font-size: var(--font-size-fluid-3);
  }

  &__intro {
    margin-block-start: var(--size-6);
    font-size: var(--font-size-4);
    line-height: var(--font-lineheight-3);
    max-width: var(--size-content-3);
  }

  &__link {
    align-self: center;
    font-family: var(--font-brand);
    font-size: var(--font-size-5);
    grid-area: link;
    text-decoration: none;
  }
}
</style>
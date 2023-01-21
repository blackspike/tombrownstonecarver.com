<template lang="pug">

.body(:class="{ 'reverse' : reverse }")

  //- title
  h2.body__title {{ title }}


  //- intro
  .body__intro
    slot(name="intro")


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
  display: flex;
  flex-direction: column;
  gap: var(--size-9);
  padding-block: var(--size-12) var(--size-7);

  @include media-query('lg') {
    align-items: center;
    padding: 0;
    display: grid;
    gap: var(--size-9);
    grid-template-areas: 'title intro' 'image content';
    grid-template-columns: 1fr 1fr;
  }

  &.reverse {
    @include media-query('lg') {
      grid-template-areas: 'title intro' 'content image';
    }
  }

  &__intro {
    grid-area: intro;
    font-size: var(--font-size-5);
    line-height: var(--font-lineheight-4);
    max-width: var(--size-content-3);

    @include media-query('lg') {
      padding-block: var(--size-12) var(--size-7);
    }
  }

  &__title {
    grid-area: title;
    font-size: var(--font-size-fluid-3);

    @include media-query('lg') {
      align-self: end;
    }
  }

  &__image {
    grid-area: image;
    height: 100%;
    overflow: hidden;
  }

  &__content {
    font-size: var(--font-size-4);
    grid-area: content;
    line-height: var(--font-lineheight-4);
    max-width: var(--size-content-3);

    .reverse & {
      @include media-query('md') {
        justify-self: end;
      }
    }
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
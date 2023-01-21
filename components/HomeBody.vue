<template lang="pug">

.body(:class="{ 'reverse' : reverse }")
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

  //- Body
  .body__content
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
  padding-block-start: var(--height-header);
  align-items: center;
  background-color: var(--white);
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'image content' 'image link';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 2fr;

  &.reverse {
    @include media-query('md') {
      grid-template-areas: 'content image' 'link image';
    }
  }

  &__image {
    grid-area: image;
    height: 100%;
  }

  &__content {
    align-self: end;
    font-size: var(--font-size-3);
    grid-area: content;
    line-height: var(--font-lineheight-5);
    padding: var(--size-fluid-5);
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
    font-size: var(--font-size-fluid-2);
    grid-area: link;
    text-decoration: none;
  }
}
</style>
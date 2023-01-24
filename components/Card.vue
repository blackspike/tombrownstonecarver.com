<template lang="pug">

nuxt-link.card(v-if="link" :to="link")

  //- Image
  img.card__image(
    v-if="image.sourceUrl"
    :sizes="image.sizes"
    :srcset="image.srcSet"
    :src="image.sourceUrl"
    :alt="image.altText"
    loading="lazy"
    :height='image.mediaDetails.height'
    :width='image.mediaDetails.width'
  )

  //- title
  h3.card__title {{ title }}

article.card(v-else)

  //- Image
  img.card__image(
    :sizes="image.sizes"
    :srcset="image.srcSet"
    :src="image.sourceUrl"
    :alt="image.altText"
    loading="lazy"
    :height='image.mediaDetails.height'
    :width='image.mediaDetails.width'
  )

  //- title
  h3.card__title {{ title }}

</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
})
</script>
<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-areas: 'image' 'title';
  grid-template-rows: 30rem auto;
  height: 100%;
  gap: var(--size-3);
  color: inherit;
  text-decoration: none;

  &__image {
    grid-area: image;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius-2);
    overflow: hidden;
  }

  &__title {
    grid-area: title;
    font-size: var(--font-size-3);
  }
}
</style>
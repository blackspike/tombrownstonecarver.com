<template lang="pug">

//- Fig
figure.image-single.vstack.gap-3(v-if="path && caption")

  //- Image
  picture.image-single__image
    source(v-if="avif" :srcset='`${path}.avif`' type='image/avif')
    source(v-if="webp" :srcset='`${path}.webp`' type='image/webp')
    img.image-single__image(
      :src='`${path}.${type}`'
      :alt="alt"
      :height="height"
      :width="width"
      :loading="lazy ? 'lazy' : null"
    )

  //- caption caption
  figcaption.image-single__caption {{ caption }}

//- Image
picture.image-single(v-else-if="path")
  source(v-if="avif" :srcset='`${path}.avif`' type='image/avif')
  source(v-if="webp" :srcset='`${path}.webp`' type='image/webp')
  img.image-single__image(
    :src='`${path}.${type}`'
    :alt="alt"
    :height="height"
    :width="width"
    :loading="lazy ? 'lazy' : null"
  )

</template>

<script setup>

const props = defineProps({
  caption: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  type: {
    type: String,
    required: true,
    default: 'png'
  },
  avif: {
    type: Boolean,
    default: false
  },
  webp: {
    type: Boolean,
    default: false
  },
  path: {
    required: true,
    type: String,
    default: null
  },
  height: {
    type: Number,
    default: null
  },
  width: {
    type: Number,
    default: null
  },
  max: {
    type: String,
    default: null
  },
  lazy: {
    type: Boolean,
    default: true
  },
})

</script>

<style lang="scss" scoped>
.image-single {
  height: auto;

  &__image {
    height: auto;
    width: 100%;
    object-fit: contain;
    max-width: v-bind(max);
  }

  &__caption {
    padding: var(--size-3);
    text-align: center;
    color: var(--gray-6);
    font-size: var(--font-size-1);
  }
}
</style>
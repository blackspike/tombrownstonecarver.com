<template lang="pug">

main.page

  //- Hero
  .page__hero

    //- Image
    img.page__image(
      v-if="page.featuredImage.node.srcSet"
      sizes="sm:100vw md:50vw lg:1920px"
      :srcset="page.featuredImage.node.srcSet"
      :alt="page.featuredImage.node.altText"
      :height='page.featuredImage.node.mediaDetails.height'
      :width='page.featuredImage.node.mediaDetails.width'
    )

    //- Title
    h1.page__title.container {{ page.title }}

  //- Wrapper
  .container

    //- Content
    .page__content-wrapper

      //- Intro
      .page__intro(v-html="page.intro.intro")

      //- Content
      .page__content(v-html="page.content")


</template>

<script setup>

const route = useRoute()
const slug = route.params.slug[0]
const { data } = await useAsyncData(slug, () => GqlPostBySlug({ uri: slug }))
const page = data.value.nodeByUri

</script>

<style lang="scss" scoped>
.page {
  width: 100%;

  &__hero {
    display: grid;
  }

  &__title {
    align-items: flex-end;
    color: var(--white);
    display: flex;
    font-size: var(--font-size-fluid-3);
    grid-column: 1;
    grid-row: 1;
    max-height: 100vh;
    padding-block-end: 10vh;

    @include media-query('lg') {
      font-size: 6rem;
    }
  }

  &__image {
    grid-row: 1;
    grid-column: 1;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--size-9);
    padding-block: var(--size-10) 0;

    @include media-query('lg') {
      padding-block: var(--size-12) var(--size-7);
      display: grid;
      gap: var(--size-9);
      grid-template-areas: 'intro content';
      grid-template-columns: 1fr 1fr;
    }
  }

  &__intro {
    grid-area: intro;
    font-size: var(--font-size-5);
    line-height: var(--font-lineheight-4);
  }

  &__content {
    font-size: var(--font-size-3);
    grid-area: content;
    line-height: var(--font-lineheight-4);
    max-width: var(--size-content-3);
  }
}
</style>
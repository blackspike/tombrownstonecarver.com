<template lang="pug">

main.home

  //- Hero
  section.hero

    //- Hero Image
    img.hero__image(
      :alt="homeData.featuredImage.node.altText"
      :height='homeData.featuredImage.node.mediaDetails.height'
      :srcset="homeData.featuredImage.node.srcSet"
      :width='homeData.featuredImage.node.mediaDetails.width'
      sizes="sm:100vw md:50vw lg:1920px"
    )

    //- Hero Title
    .hero__content.container

      h1.hero__title {{ homeData.home.pageTitle }}

  //- Home content sections
  section.container(v-for="(section, index) in homeData.home.content")

    //- Section
    HomeSection(
      :content="section.content"
      :image="section.image"
      :intro="section.intro"
      :link="section.link"
      :reverse="index % 2 !== 0"
      :title="section.title"
    )
</template>

<script setup>

const { data } = await useAsyncData('homePage', () => GqlHomePage())
const homeData = data.value.nodeByUri

</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  height: 200vh;

  // Hero image
  &__image {
    grid-row: 1;
    grid-column: 1;
    height: 200vh;
    z-index: 1;
    object-fit: cover;
  }

  &__content {
    grid-row: 1;
    grid-column: 1;
    height: 80vh;
    display: flex;
    align-items: end;
    z-index: 2;
  }

  &__title {
    font-size: var(--font-size-fluid-3);
    color: var(--white);
    max-width: 1000px;

    @media (min-height: 500px) and (min-width: 1200px) {
      font-size: 5rem;
    }

  }
}
</style>

<template lang="pug">

main.post

  //- Wrapper
  .container
    //- Title
    h1.post__title.container {{ post.title }}

    //- Content
    .post__content-wrapper

      //- Content
      .post__content(v-html="post.content")


</template>

<script setup>

const route = useRoute()
const slug = route.params.slug[0]
const { data } = await useAsyncData(slug, () => GqlPostBySlug({ uri: slug }))
const post = data.value.nodeByUri

useHead({
  title: post.title,
  meta: [
    { name: 'description', content: post.content }
  ],
})

</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  background-color: var(--gray-9);
  color: var(--white);
  padding-block: var(--size-12);

  &__title {
    align-items: flex-end;
    color: var(--white);
    display: flex;
    font-size: var(--font-size-fluid-3);
    grid-column: 1;
    grid-row: 1;
    max-height: 100vh;
    padding-block: var(--size-9);

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
    padding-block: var(--size-4) var(--size-7);
  }

  &__content {
    font-size: var(--font-size-3);
    line-height: var(--font-lineheight-4);
    max-width: var(--size-content-3);
    margin-inline: auto;
  }
}
</style>
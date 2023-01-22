<template lang="pug">

main.blog

  //- Wrapper
  .container

    //- Title
    h1.blog__title Blog
    //- Content
    .blog__content
      //- pre {{ posts }}
      CardList(:cards="posts")

    //- Content
    //- .blog__content
    //-   //- pre {{ posts }}
    //-   CardList(:cards="mastoPosts")

    //- pre {{ mastoPosts }}


</template>

<script setup>
const { data } = await useAsyncData('blog-home', () => GqlPostList({ limit: 1000 }))

const posts = data.value.posts.nodes

// // Mastodon
// const { data: mastoData } = await useFetch('https://mastodon.cloud/api/v1/accounts/109726678985099180/statuses')
// const mastoPosts = computed(() => {
//   return mastoData.map(item => {
//   })
// })

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: `Tom Brown's Blog` }
  ],
})


</script>

<style lang="scss" scoped>
.blog {
  width: 100%;
  background-color: var(--gray-9);
  color: var(--white);
  padding-block: var(--size-12);

  &__hero {
    display: grid;
  }

  &__title {
    color: var(--white);
    display: flex;
    font-size: var(--font-size-fluid-3);
    padding-block: var(--size-9);

    @include media-query('lg') {
      font-size: 6rem;
    }

    font-size: var(--font-size-3);
    grid-area: content;
    line-height: var(--font-lineheight-4);
    max-width: var(--size-content-3);
  }
}
</style>
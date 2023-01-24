<template lang="pug">

.container
  .card-list
    Card(
      v-for="card in cards"
      :title="card.title"
      :link="`/blog/${card.slug}`"
      :image="card.featuredImage?.node"
    )
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.card-list {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(25rem, 100%), 1fr));
  gap: var(--size-fluid-5);
}
</style>
<template lang="pug">

header.header

  .header__content

    nuxt-link.header__logo(to="/") Tom Brown

    nav.header__nav.nav
      nuxt-link.nav__link(to="/sculpture") Sculpture
      nuxt-link.nav__link(to="/restoration") Restoration
      nuxt-link.nav__link(to="/courses") Courses
      nuxt-link.nav__link(to="/about") About
      nuxt-link.nav__link(to="/blog") Blog
      nuxt-link.nav__link(to="/contact") Contact

</template>

<style lang="scss" scoped>
// Header
.header {
  background-color: var(--white);
  z-index: var(--layer-3);
  padding-inline: var(--size-9);

  @include media-query('lg') {
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }


  &__content {
    align-items: center;
    display: grid;
    height: var(--height-header);
    gap: var(--size-5);
    grid-template-areas: 'logo nav';
    grid-template-columns: 1fr auto;
  }

  &__logo {
    color: var(--text);
    font-family: var(--font-brand);
    font-size: var(--font-size-5);
    grid-area: logo;
    text-decoration: none;
  }

  &__nav {
    grid-area: nav;
  }
}

// Nav
.nav {
  gap: var(--size-fluid-4);
  display: none;

  @include media-query('lg') {
    display: flex;
  }

  &__link {
    color: var(--text);
    font-size: var(--font-size-3);
    text-decoration: none;
  }
}
</style>

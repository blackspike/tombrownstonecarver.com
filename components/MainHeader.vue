<template lang="pug">
.header-wrapper
  header.header.container

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
.header-wrapper {
  background-image: linear-gradient(to bottom, rgba(0 0 0 / .5), rgba(0 0 0 / 0));
  backdrop-filter: blur(2px);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--layer-3)
}

// Header
.header {
  align-items: center;
  display: grid;
  gap: var(--size-5);
  grid-template-areas: 'logo nav';
  grid-template-columns: 1fr auto;
  padding-block: var(--size-7);

  &__logo {
    color: var(--white);
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
  display: none;
  gap: var(--size-fluid-4);

  @include media-query('lg') {
    display: flex;
  }

  &__link {
    color: var(--white);
    font-size: var(--font-size-3);
    text-decoration: none;
  }
}
</style>

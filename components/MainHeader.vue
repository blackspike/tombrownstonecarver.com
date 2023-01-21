<template lang="pug">

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
// Header
.header {
  align-items: center;
  display: grid;
  gap: var(--size-5);
  grid-template-areas: 'logo nav';
  grid-template-columns: 1fr auto;
  padding-block: var(--size-7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--layer-3);

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
  display: flex;
  gap: var(--size-fluid-4);

  &__link {
    color: var(--text);
    font-size: var(--font-size-3);
    text-decoration: none;
  }
}
</style>

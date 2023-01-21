<template lang="pug">

footer.footer.container

  nuxt-link.footer__logo(to="/") Tom Brown

  nav.footer__nav.nav
    nuxt-link.nav__link(to="/restoration") Facebook
    nuxt-link.nav__link(to="/courses") Mastodon
    nuxt-link.nav__link(to="/about") Instagram
    nuxt-link.nav__link(to="/contact") Contact

</template>

<style lang="scss" scoped>
// footer
.footer {
  align-items: center;
  background-color: var(--white);
  display: grid;
  gap: var(--size-5);
  grid-template-areas: 'logo nav';
  grid-template-columns: 1fr auto;
  padding-block: var(--size-13) var(--size-12);
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
  gap: var(--size-fluid-4);
  display: none;
  gap: var(--size-fluid-4);

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

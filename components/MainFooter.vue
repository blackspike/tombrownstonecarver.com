<template lang="pug">
.footer-wrapper
  footer.footer.container

    nuxt-link.footer__logo(to="/") {{ data.generalSettings.title }}

    nav.footer__nav.nav
      a.nav__link(v-for="link in footerLinks" :href="link.links.url") {{ link.links.title }}
      nuxt-link.nav__link(to="/contact") Contact

</template>

<script setup>

const { data } = await useAsyncData('siteSettings', () => GqlSiteSettings())
const footerLinks = data.value.siteSettings.siteSettings.socialLinks

</script>


<style lang="scss" scoped>
// footer
.footer {
  align-items: center;
  background-color: var(--white);
  display: grid;
  gap: var(--size-5);
  grid-template-areas: 'logo' 'nav';
  grid-template-columns: 1fr auto;
  padding-block: var(--size-13) var(--size-12);
  z-index: var(--layer-3);

  @include media-query('lg') {
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
  display: flex;
  flex-direction: column;
  gap: var(--size-5);

  @include media-query('lg') {
    gap: var(--size-fluid-4);
    flex-direction: row;
  }

  &__link {
    color: var(--text);
    display: block;
    font-size: var(--font-size-3);
    text-decoration: none;
  }
}
</style>

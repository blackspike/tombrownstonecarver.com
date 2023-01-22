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

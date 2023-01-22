<template lang="pug">
.header-wrapper
  header.header.container

    //- Logo
    nuxt-link.header__logo(to="/" v-on:click.native="menuOpen = false")  {{ data.generalSettings.title }}

    //- Nav
    nav.header__nav.nav#nav-main
      nuxt-link.nav__link(to="/sculpture") Sculpture
      nuxt-link.nav__link(to="/restoration") Restoration
      nuxt-link.nav__link(to="/courses") Courses
      nuxt-link.nav__link(to="/about") About
      nuxt-link.nav__link(to="/blog") Blog
      nuxt-link.nav__link(to="/contact") Contact

    //- Nav mobile
    nav.header__nav-mobile.nav-mobile#nav-mobile(v-if="menuOpen")
      nuxt-link.nav-mobile__link(v-on:click.native="menuOpen = false" to="/sculpture") Sculpture
      nuxt-link.nav-mobile__link(v-on:click.native="menuOpen = false" to="/restoration") Restoration
      nuxt-link.nav-mobile__link(v-on:click.native="menuOpen = false" to="/courses") Courses
      nuxt-link.nav-mobile__link(v-on:click.native="menuOpen = false" to="/about") About
      nuxt-link.nav-mobile__link(v-on:click.native="menuOpen = false" to="/blog") Blog
      nuxt-link.nav-mobile__link(v-on:click.native="menuOpen = false" to="/contact") Contact

    //-  Nav toggle button
    button.btn-toggle-nav.header__nav-toggle(
      :aria-expanded='menuOpen'
      @click="menuOpen = !menuOpen"
      aria-controls='nav-mobile'
      aria-label='Toggle Menu'
      type='button'
    )
      span(v-if="menuOpen") Close
      span(v-else) Menu

</template>

<script setup>

const { data } = await useAsyncData('siteSettings', () => GqlSiteSettings())

const menuOpen = ref(false)

</script>

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
  grid-template-areas: 'logo toggle' 'nav-mobile nav-mobile';
  grid-template-columns: 1fr auto;
  padding-block: var(--size-7);

  @include media-query('lg') {
    grid-template-areas: 'logo nav';
  }

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

  &__nav-mobile {
    grid-area: nav-mobile;
  }

  &__nav-toggle {
    grid-area: toggle;
    display: block;

    @include media-query('lg') {
      display: none;
    }
  }
}

// Nav main
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
    text-shadow: 0 0 3rem rgba(0 0 0 / .5);

    &.router-link-active {
      color: var(--brand);
    }
  }
}

// Toggle
.btn-toggle-nav {
  background-color: transparent;
  border-width: 0;
  color: var(--white);
  display: block;
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-7);
  padding: var(--size-2) var(--size-7);
  z-index: var(--layer-4);

  @include media-query('lg') {
    display: none;
  }
}

// Nav mobile
.nav-mobile {
  background-color: var(--white);
  box-shadow: var(--shadow-4);
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  justify-self: end;
  padding: var(--size-2) 0;
  z-index: var(--layer-4);

  @include media-query('lg') {
    display: none;
  }

  &__link {
    color: var(--text);
    display: block;
    font-size: var(--font-size-3);
    padding: var(--size-2) var(--size-7);
    text-decoration: none;

    &.router-link-active {
      color: var(--brand);
    }

    &:active,
    &:focus {
      background-color: var(--brand);
      color: var(--white);
    }
  }
}
</style>

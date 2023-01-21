<template lang="pug">

.home

  //- Hero
  ImageSingle.home__hero-image(
    path="/images/tom-home-hero"
    :width="1920"
    :height="2880"
    type="jpg"
    :avif="true"
    :webp="true"
    :lazy="false"
    )

  //- Home content
  main.scroll

    //- Section
    section.scroll__section

      //- Hero
      .hero-title.container

        h1 Tom Brown is an award winning stone carver, sculptor, letter cutter and restorer based in Brighton.

    //- Section
    section.scroll__section

      //- Hero
      .hero-title.container

        h1 Tom Brown is an award winning stone carver, sculptor, letter cutter and restorer based in Brighton.

    //- Section
    section.scroll__section

      //- Hero
      .hero-title.container

        h1 Tom Brown is an award winning stone carver, sculptor, letter cutter and restorer based in Brighton.

    //- Section
    section.scroll__section

      //- Hero
      .hero-title.container

        h1 Tom Brown is an award winning stone carver, sculptor, letter cutter and restorer based in Brighton.

</template>



<style lang="scss" scoped>
.scroll {
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  z-index: var(--layer-2);

  &__section {
    align-items: center;
    min-height: 100vh;
    scroll-snap-align: start;
    outline: 2px dotted orangered;
  }
}

.home {

  // Hero image
  &__hero-image {
    bottom: 0;
    height: 200vh;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: var(--layer-1);
  }

  // Hero title
}

.hero-title {
  height: 100vh;
  display: flex;
  align-items: center;
  color: var(--white);
}
</style>
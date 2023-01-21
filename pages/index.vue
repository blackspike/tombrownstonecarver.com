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

        h1.hero-title__title Tom Brown is an award winning stone carver, sculptor, letter cutter and restorer based in Brighton.

    //- Section
    section.scroll__section


      //- Sculpture
      HomeBody(
        title="Sculpture"
        image="/images/home-sculpture"
        link="/sculpture"
        linkTitle="View Tom's Sculptures"
      )
        template(v-slot:intro)
          p Tom creates stone sculpture for exterior facades, interiors and gardens, his sculptural work focusing on the sheer and permanent beauty of form in nature.

        template(v-slot:content)
          p He aims to express the power and vibrancy of the living world through the tactile medium of stone in all its beauty & timeless variety.

          p He is proud to swim against the present tide of the conceptual in current art practice.

    //- Section
    section.scroll__section

      //- Sculpture
      HomeBody(
        :reverse="true"
        image="/images/home-restoration"
        link="/restoration"
        linkTitle="Restoration Services"
        title="Restoration"
      )

        template(v-slot:intro)
          p Tom provides architectural stone restoration services for architectural projects (from Grade One listed buildings to period domestic properties) repairing, restoring and designing ornamental details and features in stone, as well as in brick or plaster.

        template(v-slot:content)
          p As well as restoring existing historic fabric, Tom creates new ornamental features from ornate classical fireplaces to Corinthian Capitals.

          p He is proud to swim against the present tide of the conceptual in current art practice.


    //- Section
    section.scroll__section

      //- course
      HomeBody(
        image="/images/home-courses"
        link="/courses"
        linkTitle="Tom's courses"
        title="Courses"
      )

        template(v-slot:intro)
          p Tom provides architectural stone restoration services for architectural projects (from Grade One listed buildings to period domestic properties) repairing, restoring and designing ornamental details and features in stone, as well as in brick or plaster.

        template(v-slot:content)
          p Tom believes the meditative and patient practice of stone carving is both rewarding and therapeutic, its time-honoured processes improving focus and cultivating calm, through mindful, creative engagement with an ancient and natural material.


</template>



<style lang="scss" scoped>
.scroll {

  @include media-query('lg') {
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;

  }

  z-index: var(--layer-2);

  &__section {
    align-items: center;
    min-height: 100vh;
    scroll-snap-align: start;
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

}

.hero-title {
  height: 100vh;
  display: flex;
  align-items: center;

  &__title {
    font-size: var(--font-size-fluid-3);
    color: var(--white);

    @include media-query('lg') {
      font-size: 6rem;
    }
  }
}
</style>
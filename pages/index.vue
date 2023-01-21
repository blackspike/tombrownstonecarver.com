<template lang="pug">

main.home

  section.hero

    //- Hero
    ImageSingle.hero__image(
      path="/images/home/tom-home-hero"
      :width="1920"
      :height="2880"
      type="jpg"
      :avif="true"
      :webp="true"
      :lazy="false"
      fit="cover"
      )

    .hero__content.container

      h1.hero__title Tom Brown is an award winning stone carver, sculptor, letter cutter and restorer based in Brighton.

  //- Home content


  //- Section
  section.container

    //- Sculpture
    HomeBody(
      title="Sculpture"
      image="/images/home/home-sculpture"
      link="/sculpture"
      linkTitle="View Tom's Sculptures"
    )
      template(v-slot:intro)
        p Tom creates stone sculpture for exterior facades, interiors and gardens, his sculptural work focusing on the sheer and permanent beauty of form in nature.
      template(v-slot:content)
        p He aims to express the power and vibrancy of the living world through the tactile medium of stone in all its beauty & timeless variety.

        p He is proud to swim against the present tide of the conceptual in current art practice.

  //- Section
  section.container

    //- Restoration
    HomeBody(
      :reverse="true"
      image="/images/home/home-restoration"
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
  section.container

    //- course
    HomeBody(
      image="/images/home/home-courses"
      link="/courses"
      linkTitle="Tom's courses"
      title="Courses"
    )

      template(v-slot:intro)
        p Tom has established a workshop in Brighton from which he runs weekend courses in stone carving as well as private tuition sessions, teaching traditional skills to carvers of all levels, from  experienced craftsmen to those who have never picked up a mallet &amp; chisel.

      template(v-slot:content)
        p Tom believes the meditative and patient practice of stone carving is both rewarding and therapeutic, its time-honoured processes improving focus and cultivating calm, through mindful, creative engagement with an ancient and natural material.


</template>



<style lang="scss" scoped>
.hero {
  display: grid;
  height: 200vh;

  // Hero image
  &__image {
    grid-row: 1;
    grid-column: 1;
    height: 200vh;
    z-index: 1;
  }

  &__content {
    grid-row: 1;
    grid-column: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 2;
  }

  &__title {
    font-size: var(--font-size-fluid-3);
    color: var(--white);

    @include media-query('lg') {
      font-size: 6rem;
    }
  }
}
</style>

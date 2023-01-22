<template lang="pug">

.app
  MainHeader
  NuxtLayout
    NuxtPage
  MainFooter
  NuxtLoadingIndicator(color="var(--brand)" :height="3")
</template>

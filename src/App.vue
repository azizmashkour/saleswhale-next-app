<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import { Footer, Header } from './components'
import { Main } from './views'

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Main
  }
}
</script>

<style lang="scss">
@import "./assets/scss/animations";
@import "./assets/scss/app";
</style>

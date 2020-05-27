<template>
  <div id="app">
    <div id="preloader" class="loader--hide-not">
      <div id="sales-preloader" class="sales-preloader">
        <div class="animation-preloader">
          <div class="spinner"></div>
          <div class="txt-loading">
            <span data-text-preloader="S" class="letters-loading">
            S
            </span>
            <span data-text-preloader="A" class="letters-loading">
            A
            </span>
            <span data-text-preloader="L" class="letters-loading">
            L
            </span>
            <span data-text-preloader="E" class="letters-loading">
            E
            </span>
            <span data-text-preloader="S" class="letters-loading">
            S
            </span>
            <span data-text-preloader="W" class="letters-loading">
            W
            </span>
            <span data-text-preloader="H" class="letters-loading">
            H
            </span>
            <span data-text-preloader="A" class="letters-loading">
            A
            </span>
            <span data-text-preloader="L" class="letters-loading">
            L
            </span>
            <span data-text-preloader="E" class="letters-loading">
            E
            </span>
          </div>
          <p class="text-center">The Collaborative future of work</p>
        </div>
      </div>
    </div>
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
  },
  mounted () {
    const loader = document.querySelector('#preloader')
    window.addEventListener('load', function (event) {
      loader.classList.add('d-none')
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/spash-screen";
@import "./assets/scss/responsive";
@import "./assets/scss/animations";
@import "./assets/scss/app";
</style>

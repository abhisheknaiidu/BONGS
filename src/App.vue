<template>
  <div id="app">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <Nav />

      <div class="container">
        <router-view />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import EventBus from "@/EventBus"

export default {
  data: () => ({
    isLoading: true
  }),
  mounted() {
    EventBus.$on("i18n-load-start", () => (this.isLoading = true))

    EventBus.$on("i18n-load-complete", () => (this.isLoading = false))
  },
  components: { Nav, Footer }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app .container {
  padding: 1rem;
}
</style>

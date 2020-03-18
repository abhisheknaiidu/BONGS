<template>
  <div class="home">
    <h1 v-t="'app.title'" />

    <Cards />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue"

export default {
  name: "home",
  components: {
    Cards
  }
}
</script>

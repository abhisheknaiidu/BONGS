<template>
  <router-link :to="getTo()">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: ["to"],
  methods: {
    getTo() {
      if (typeof this.to !== "string") {
        return this.to
      }

      const locale = this.$route.params.locale

      // we strip leading and trailing slashes and prefix
      // the current locale
      return `/${locale}/${this.to.replace(/^\/|\/$/g, "")}`
    }
  }
}
</script>
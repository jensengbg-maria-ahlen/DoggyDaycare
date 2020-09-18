<template>
  <section id="home">
    <h2>Welcome to Doggy Daycare</h2>
    <p>We are currently takeing care of {{ dogCount }} dogs.</p>
  </section>
</template>

<script>
export default {
    name: 'Home',
    computed: {
      dogCount() {
        return this.$store.getters.dogCount
      }
    }
}
</script>

<style>

</style>
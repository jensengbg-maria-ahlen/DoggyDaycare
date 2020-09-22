<template>
  <section id="home">
    <h2>Welcome to our Doggy Daycare</h2>
    <p>We are currently taking care of {{ dogCount }} dogs.</p>
    <img src="@/assets/happy-dog.jpg" alt="daycare">
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

<style lang="scss">
@import './../scss/variables';
@import './../scss/typography';

#home {
  img {
    width: 50rem;
  }

  h2 {
    color: $mainColor;
  }
}

</style>
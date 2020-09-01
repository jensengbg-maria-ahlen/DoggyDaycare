<template>
  <section id="home">
    <h2>Welcome to Doggy Daycare</h2>
    <p>We are currently takeing care of {{ dogs.length }} dogs.</p>
  </section>
</template>

<script>
export default {
    name: 'Home',
    props: {
      dogs: Array
    }
}
</script>

<style>

</style>
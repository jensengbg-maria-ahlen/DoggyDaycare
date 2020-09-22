<template>
    <main id="app">
        <nav>
            <router-link to="/">Home</router-link>  |  
            <router-link to="/dogs">Our Dogs</router-link>
        </nav>
        <router-view />
    </main>
</template>

<script>
export default {
    name: 'App',
    beforeMount() {
        this.$store.dispatch('fetchData')
    }
}
</script>

<style lang="scss">
@import './scss/typography';

body {
    background: #eee;

    #app {
        max-width: 1000px;
        margin: 1rem auto;
    }
}
</style>
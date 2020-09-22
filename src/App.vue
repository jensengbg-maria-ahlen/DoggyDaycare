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
@import './scss/variables';

body {
    background: #eee;

    #app {
        max-width: 1000px;
        margin: 1rem auto;

        nav {
            a {
                text-decoration: none;
                font-size: 1.4rem;
                color: #222;
                margin: 0.5rem;

                &.router-link-exact-active {
                    font-weight: 700;
                    color: $mainColor;
                }
            }
        }
    }
}
</style>
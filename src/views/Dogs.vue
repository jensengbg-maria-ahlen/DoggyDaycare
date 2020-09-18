<template>
    <section id="dogs">
        <h2>Our Dogs</h2>
        <Dog v-for="dog in getDogs" :key="dog.chipNumber" :dog="dog" />
    </section>
</template>

<script>
import Dog from '@/components/DogCard.vue';

export default {
    name: 'Dogs',
    components: {
        Dog
    },
    computed: {
        dogs() {
            return this.$store.state.dogs
        },
        getDogs() {
            return this.$store.getters.getDogs
        }
    }
}
</script>

<style lang="scss">

    #dogs {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;

        h2 {
            grid-column: auto / span 4;
        }
    }

</style>
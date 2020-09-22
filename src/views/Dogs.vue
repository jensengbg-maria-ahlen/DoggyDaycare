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
@import './../scss/typography';
@import './../scss/variables';

    #dogs {
        @include grid-4-column;

        h2 {
            grid-column: auto / span 4;
            color: $mainColor;
        }
    }

</style>
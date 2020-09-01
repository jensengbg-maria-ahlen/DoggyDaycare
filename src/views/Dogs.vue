<template>
    <section id="dogs">
        <h2>Our Dogs</h2>
        <Dog v-for="dog in dogs" :key="dog.chipNumber" :dog="dog" />
    </section>
</template>

<script>
import Dog from '@/components/DogCard.vue';

export default {
    name: 'Dogs',
    props: {
        dogs: Array
    },
    components: {
        Dog
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
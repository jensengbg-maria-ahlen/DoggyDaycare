<template>
  <article class="dog" @click="goTo(dog.chipNumber)">
      <img :src="dog.img" alt="a dog">
      <h3>Name: {{ dog.name }}</h3>
      <h4>Breed: {{ dog.breed }}</h4>
  </article>
</template>

<script>
export default {
    name: 'Dog',
    props: {
        dog: Object
    },
    methods: {
        goTo(id) {
            this.$router.push(`/dogs/${id}`);
        }
    }
}
</script>

<style lang="scss">
@import './../scss/variables';
@import './../scss/typography';

    .dog {
        background: white;
        @include flex-center;
        flex-direction: column;
        box-shadow: $shadow;
        padding: 3rem 0;
        border-radius: 3px;
        transition: all .2s ease;
        

        &:hover {
            transform: scale(1.1);
            box-shadow: $shadow;
            cursor: pointer;

            img {
                filter: grayscale(0);
            }
        }

        img {
            @include flex-center;
            width: 8rem;
            height: 8rem;
            object-fit: cover;
            border-radius: 9999rem;
            margin: 0 0 1rem 0;
            filter: grayscale(1);
        }

        h3 {
            color: $mainColor;
        }

        h4 {
            opacity: .6;
        }
    }

</style>
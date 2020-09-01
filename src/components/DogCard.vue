<template>
  <article class="dog">
      <img :src="dog.img" alt="a dog">
      <h3>Name: {{ dog.name }}</h3>
      <h4>Breed: {{ dog.breed }}</h4>
      <h5>Age: {{ dog.age }}</h5>
      <h5>Sex: {{ dog.sex }}</h5>
  </article>
</template>

<script>
export default {
    name: 'Dog',
    props: {
        dog: Object
    }
}
</script>

<style lang="scss">
    .dog {
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 1rem rgba(0, 0, 0, .1);
        padding: 3rem 0;
        border-radius: 3px;
        transition: all .2s ease;
        filter: grayscale(1);

        &:hover {
            transform: scale(1.1);
            box-shadow: 0 0 1.5rem rgba(0, 0, 0, .5);
            filter: grayscale(0);
            cursor: pointer;
        }

        img {
            width: 8rem;
            height: 8rem;
            object-fit: cover;
            border-radius: 9999rem;
            margin: 0 0 1rem 0;
        }

        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.6rem;
        }

        h4 {
            margin: 0;
            padding:0;
            font-weight: 400;
            opacity: .6;
        }

        h5 {
            margin: 0;
            padding:0;
            font-weight: 300;
            opacity: .6;
        }
    }

</style>
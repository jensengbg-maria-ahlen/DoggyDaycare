<template>
<section>
    <section id="doginfo">
      <h2>{{ dog.name }} 
            <img class="gender" src="@/assets/female-outline.svg" alt="gender" v-show="dog.sex === 'female'"/>
            <img class="gender" src="@/assets/male-outline.svg" alt="gender" v-show="dog.sex === 'male'"/> </h2>
      <img :src="dog.img" alt="a dog">
      <div>
            <h3>Age: {{dog.age}}</h3>
            <h3>Breed: {{dog.breed}}</h3>
            <h5>Chipnumber: {{dog.chipNumber}}</h5>
            <h6>Owner: <br> Name: {{dog.owner.name + ' ' + dog.owner.lastName}} <br>Phone: {{dog.owner.phoneNumber}}</h6>
      </div>
  </section>
</section>
</template>

<script>
export default {
    name: 'DogInfo',
    computed:{
        dog() {
            return this.$store.getters.dog(this.$route.params.chipNumber)
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)         //gå tillbaka en sida.
        }
    }
}
</script>

<style lang="scss">
@import './../scss/variables';
@import './../scss/typography';

    #doginfo {
        margin: 1rem auto;
        @include flex-center;
        flex-direction: column;
        background: white;
        box-shadow: $shadow;
        border-radius: 3px;
        max-width: 600px;

        .gender {
            padding-top: .5rem;
            width: 2rem;
            height: 2rem;
        }

        h2 {
            color: $mainColor;
        }
        
        div {
            margin: 0;
            padding: 0;
        }
    }

</style>
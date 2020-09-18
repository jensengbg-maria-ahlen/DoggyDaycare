<template>
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
</template>

<script>
export default {
    name: 'DogInfo',
    computed:{
        dog() {
            return this.$store.getters.dog(this.$route.params.chipNumber)
        }
    }
}
</script>

<style lang="scss">

    #doginfo {
        margin: 1rem auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        box-shadow: 0 0 1rem rgba(0, 0, 0, .1);
        border-radius: 3px;
        max-width: 600px;

        .gender {
            padding-top: .5rem;
            width: 2rem;
            height: 2rem;
        }

        h2 {
            font-size: 2rem;
            font-weight: bolder;
        }
        
        div {

            margin: 0;
            padding: 0;

            h3 {
                font-size: 1rem;
            }

            h4 {
                font-weight: 400;
            }

            h5 {
                font-weight: 400;
            }

            h6 {
                margin-top: .5rem;
                font-weight: 400;
            }
        
        }

        
    }

</style>
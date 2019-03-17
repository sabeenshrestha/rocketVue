<template lang="html">
    <div class="card col-3">
      <img :src="rocket.image" class="card-img-top" alt="rocket.name">
      <div class="card-body">
        <h5 class="card-title">{{rocket.name}}</h5>
        <p class="card-text">{{rocket.description}}</p>
        <button @click="removeRocket(rocket)" class="btn btn-danger">Delete</button>
      </div>
    </div>  
</template>

<script>
  import { mapMutations } from 'vuex';

    export default{
        name:'rocket',

        props:['rocket'],

        methods:{
            ...mapMutations(['removeRocket']), 
        },
        
    };
</script>
<template lang="html">
    <div class="card col-3">
      <img :src="rocket.image" class="card-img-top" alt="rocket.name">
      <div class="card-body">
        <h5 class="card-title">{{rocket.name}}</h5>
        <p class="card-text">{{rocket.description}}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>  
</template>

<script>
    export default{
        name:'rocket',

        props:[
        'rocket'
        ],
    };
</script>
<template lang="html">
    <section class="row">
        <rocket v-for="rocket in rockets" 
        :rocket="rocket"
        ></rocket>
    </section>
    
</template>

<script>
    import Rocket from '@/components/Rocket'
    import { mapGetters }  from 'vuex'
    
    export default{
        name:'rocketList',

        props:[
        // 'rockets',
        
        ],

        computed:{
            ...mapGetters({
                rockets: 'rockets'
            }),    
        },

        components:{
            Rocket,
        },
    };
</script>

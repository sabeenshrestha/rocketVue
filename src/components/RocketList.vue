<template lang="html">
    <section class="row">
        <rocket v-for="rocket in rockets" 
        :rocket="rocket"></rocket>
    </section>
    
</template>

<script>
    import Rocket from '@/components/Rocket'

    export default{
        name:'rocketList',

        props:[
        'rockets'
        ],

        components:{
            Rocket,
        },
    };
</script>

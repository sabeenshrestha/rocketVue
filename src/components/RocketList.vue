<template lang="html">
    <section class="row">
        <rocket v-for="rocket in rockets" 
        :rocket="rocket"
        :removeRocket="removeRocket"></rocket>
    </section>
    
</template>

<script>
    import Rocket from '@/components/Rocket'

    export default{
        name:'rocketList',

        props:[
        'rockets',
        'removeRocket'
        ],

        components:{
            Rocket,
        },
    };
</script>

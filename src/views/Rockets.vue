<template lang="html">
    <section>
        <new-rocket-form></new-rocket-form>
        <rocketList></rocketList>
        
    </section>
</template>

<script>
    import newRocketForm from '@/components/NewRocketForm'
    import RocketList from '@/components/RocketList'

    export default{
        name: 'rockets',
        
        async mounted(){
            this.$store.dispatch('getRockets');
        },

        components:{
            newRocketForm,
            RocketList
        },
    }
</script>


<template lang="html">
    <section>
        <new-rocket-form
            :addRocket="addRocket">
        </new-rocket-form>
        <rocketList 
            :rockets="rockets"
            :removeRocket="removeRocket">
            </rocketList>
        
    </section>
</template>

<script>
    import newRocketForm from '@/components/NewRocketForm'
    import API from '@/lib/API'
    import RocketList from '@/components/RocketList'

    export default{
        name: 'rockets',

        data:() =>({
            rockets: [],

        }),

        async mounted(){
            this.rockets = await API.getRockets();
        },

        methods:{
            addRocket(rocket){
                this.rockets.push(rocket)
            },

            removeRocket(rocket){
                const index = this.rockets.indexOf(rocket)
                this.rockets.splice(index,1)
            }
        },

        components:{
            newRocketForm,
            RocketList
        },
    }
</script>


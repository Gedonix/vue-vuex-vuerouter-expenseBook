<template>
    <div class="footer">
        <button @click="stepLeft"><span class="fas fa-angle-left"></span></button>
        <button             
            v-for="(number, idx) in quantity"
            :key="number"
            @click="setActivePage(idx)"
            :class="activePage === idx ? 'active' : 'passive'"
        >
        {{number}}</button>   
        <button @click="stepRight"><span class="fas fa-angle-right"></span></button>     
    </div>
</template>

<script>
export default {    
    methods:{
        setActivePage(idx){
            this.$store.commit('setActivePage', idx)
        },        
        stepLeft() {
            this.$store.commit('stepLeft')
        },
        stepRight(){
            this.$store.commit('stepRight')
        }
    },
    computed: {
        activePage() {
            return this.$store.getters.activePage
        },
        quantity() {
            return this.$store.getters.quantity
        }
    }
}
</script>

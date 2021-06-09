<template>
    <h2>Добавить в книгу новые записи о расходах</h2>
    <div class="form_wrapper">
        <form class="show_left" @submit.prevent="">
            <div class="inputs">
                <input id="1" type="date" v-model="idate">

                <select v-model="category">
                    <option disabled value="">Выберите категорию</option>
                    <option 
                        v-for="cat in categories"
                        :key="cat"
                    >{{cat}}</option>
                </select>
            
                <input type="number" v-model.number="valuecost" placeholder="Размер платежа">
                <button type="submit" @click="addScore">Добавить</button>            
            </div> 
            <div class="warning">{{warninig}}</div>        
        </form>
        <div class="show_right">
            <p>Общая сумма расходов</p>
            <p> {{ summa }} </p>
        </div>
    </div>
    
</template>

<script>
import {setId} from '../lib/validate.js'

export default {
    data() {
        return {
            idate:     '',
            category:  '',
            valuecost: '' ,
            warninig: '',            
        }
    },
    methods: {
        formIsValid(id) {       
            if (id === 0){
                this.warninig = 'Некорректная дата'
                this.idate = ''
                return false
            } else if (!this.category) {
                this.warninig = 'Не выбрана категория'
                return false
            } else if (!this.valuecost) {
                this.warninig = 'Не указан размер платежа'
                return false
            } else {
                this.warninig = ''
                return true
            }
        },
        clearForm(){
            setTimeout(() => {
                this.idate     = ''
                this.category  = ''
                this.valuecost = ''
            }, 500)            
        },
        addScore(){
            let id = setId(this.idate)
            if(this.formIsValid(id)) {                
                const entry = {
                    id,
                    date: `${this.idate.slice(8)}.${this.idate.slice(5, 7)}.${this.idate.slice(0, 4)}`,
                    category: this.category,
                    value: this.valuecost 
                }             
                this.$store.dispatch('upload', {
                    entry
                })
                this.clearForm()
            }
        }        
    },
    computed: {
        categories() {
            return this.$store.getters.categories
        },
        summa() {
            return this.$store.getters.summa
        }
    },
    mounted(){
        this.$store.commit({
                        type: 'prepare',
                        picked: '2',
                        range: {},
                        new: true
                    })
    },
    unmounted() {
        this.$store.commit('clear')
    }  
}
</script>

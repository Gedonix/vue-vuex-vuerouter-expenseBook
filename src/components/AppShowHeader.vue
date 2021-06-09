<template>
<h2>Просмотреть записи о расходах</h2>
<div class="show_header_wrapper">
    <div class="show_header">
        <button class="show_btn" @click="show">Показать книгу</button>
        <p>Сортировка:</p>
        <div class="radio">
            <label for="one">По порядку ввода</label>     
            <input type="radio" id="one" value="1" v-model="picked" />        
        </div>
        <div class="radio">
            <label for="two">Сначала более свежие</label>
            <input type="radio" id="two" value="2" v-model="picked" />        
        </div>    
    </div>
    <div class="show_header">
        <p>Период</p>
        <div class="radio">
            <label for="one">с</label>     
            <input type="date" id="one"  :value="start" @input="start = $event.target.value" />        
        </div>
        <div class="radio">
            <label for="two">по</label>
            <input type="date" id="two"  :value="end" @input="end = $event.target.value" />        
        </div> 
        <button class="show_btn" @click="clear">Очистить список</button>
    </div>    
</div>
</template>

<script>
import {checkRange} from '../lib/validate.js'

export default {
    data(){
        return {
            picked: '1',
            start: '',
            end: ''
        }
    },
    methods: {
        show() {
            this.$store.commit({
                type: 'prepare',
                picked: this.picked,
                range: checkRange(this.start, this.end),
                new: false
            })
        },
        clear() {
            this.start = ''
            this.end = ''
            this.$store.commit('clear')
        }        
    },
    unmounted() {
        this.clear()
    }    
}
</script>



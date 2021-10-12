<template>
    <div >
      <div>{{animal.name}}</div>||
      <div> color:{{animal.color}}</div>
    </div>
</template>
<script >

import {mapState} from 'vuex'
export default {
    data (){
        return{
            animal:{}
        }
    },
    computed:{
        ...mapState([
            'cats',
            'dogs',
        ]),
        
    },
    mounted(){
        const animal=this[this.$route.params.pet][this.$route.params.id];
        this.animal= animal;
    }
}
</script>
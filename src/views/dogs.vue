<template>
  <div class="about container">
    <PetTable loai="dog" :pets="dogs" :deletep="deletep"/>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import PetTable from '@/components/showPet.vue'

export default {
  components:{
    PetTable,

  },
  computed:{
    ...mapState([
      'dogs'
    ]),
  },
  methods:{
    ...mapActions([
        'deletePet'
    ]),

    deletep(i){
      const payload={
        loai: 'dog',
        index:i
      };
      this.deletePet(payload);
    }
  }
}
</script>
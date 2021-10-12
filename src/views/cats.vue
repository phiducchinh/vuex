<template>
  <div class="about container">
    <div>count: {{getCountCat}}</div>
      <PetTable loai="cat" :pets="cats" :deletep="deletep"/>
  </div>
</template>

<script>
import {mapState, mapActions,mapGetters} from 'vuex'
import PetTable from '@/components/showPet.vue'

export default {
  components:{
    PetTable,
  },
  computed:{
    ...mapState([
      'cats'
    ]),
    ...mapGetters([
      'getCountCat',
    ])
  },
  methods:{
    ...mapActions([
        'deletePet'
    ]),

    deletep(i){
      const payload={
        loai: 'cat',
        index:i
      };
      this.deletePet(payload);
    }
  }
}
</script>
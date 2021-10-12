<template>
  <div class="home container">
    <div class="add">
      <button @click="showForm()" type="button" class="btn btn-primary">+Thêm</button>
    </div>
    <form v-if="show" @submit.prevent="submit()">
      <div class="mb-3 form">
        <label for="name" class="form-label">Tên: </label>
        <input type="text" v-model="form.name" class="form-control">
      </div>

      <div class="mb-3">
        <select class="form-select" v-model="form.loai" aria-label="Default select example">
          <option selected>Chọn...</option>
          <option value="dogs">dogs</option>
          <option value="cats">Cats</option>
        </select>
      </div>

      <div class="mb-3 form">
        <label for="age" class="form-label">Tuổi </label>
        <input type="text" v-model="form.age" class="form-control">
      </div>'
      <div class="mb-3 form">
        <label for="color" class="form-label">Color: </label>
        <input type="text" v-model="form.color" class="form-control">
      </div>
      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Submit</button>
        <button class="btn btn-secondary" type="Reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapAction, mapActions} from 'vuex'
export default{
  data(){
    return{
      show:false,
      form:{
        loai:'',
        name:'',
        age: 0,
        color:'',
      }
    }
  },
  methods:{
    ...mapActions([
      'addPet'
    ]),
    showForm(){
      this.show=!this.show;
    },
    submit(){
      const {loai,name, age,color}=this.form;
      const payload={
        loai,
        pet:{
          name,
          age,
          color
        }
      }
      this.addPet(payload);
    }
  }
}
</script>

<style>
  .add{
    margin-bottom: 20px;
  }
  .form{
    display: flex;
  }
  .form label{
    margin-right: 20px;
  }
  .btn-secondary{
    margin-left: 30px;
  }
</style>

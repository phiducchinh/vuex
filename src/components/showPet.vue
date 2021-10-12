<template>
    <div class="container">
            <div>{{loai}}</div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">STT</th>
                <th scope="col">Name</th>
                <th scope="col">Color</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cat,i) in pets" :key="i">
                <th scope="row">{{i}}</th>
                <td><router-link :to="`/pets/cats/${cat.index}`">{{cat.name}}</router-link></td>
                <td>{{cat.color}}</td>
                <td><button type="button" @click="deletep(i)" class="btn btn-danger">Xoá</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:{
        loai:String,
        pets:Array,
        deletep: Function,
    }
}
</script>
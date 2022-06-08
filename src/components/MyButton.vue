<template lang="">
   <div>
      <v-btn color="grey darken-1" @click="onenModalForm">Add new cost <v-icon>mdi-plus</v-icon></v-btn>
      <v-btn color="grey darken-1"  class="last" @click="onenModalFormReg">Registration</v-btn>
   </div>
</template>
<script>
export default {
   data() {
      return {
         
      }
   },
   methods: {
      onenModalForm(){
         this.$modal.Show('addform', {title: 'Add form', component: 'addform'})
      },
      onenModalFormReg (){
         this.$modal.Show('auth', {title: 'Registration Form', component: 'auth'})
      }
   },
}
</script>
<style>
button:last-child{
   margin-left: 10px;
}
</style>
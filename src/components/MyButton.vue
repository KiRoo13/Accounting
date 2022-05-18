<template lang="">
   <div>
      <button @click="onenModalForm">Add new cost</button>
      <button class="last" @click="onenModalFormReg">Registration</button>
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
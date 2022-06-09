<template>
   <div>
      <div class="wrapper">
         <div class="wrapper__top">
            <h3>{{ settings.title }}</h3>
            <AuthForm v-if="settings.component ==='auth'"></AuthForm>
            <AddForm  v-if="settings.component ==='addform'"></AddForm>
         </div>
           <div class="wrapper__buttom">
            <button @click="Hide">Close</button>
         </div>
      </div>
   </div>
</template>
<script>
import AddForm from "./AddForm.vue";

export default {
    name: "ModalWindow",
    components: { AddForm },
    props: {
       settings: Object
    },
    data() {
        return {
           item: ''
        };
    },
    methods: {
       Hide (){
           this.$modal.Hide()
         },
      },
}
</script>
<style >
.wrapper {
   width: 300px;
   border-radius: 10px;
   height: 200px;
   background-color: rgb(169, 174, 174);
   position: absolute;
   top: 20%;
   left: 40%;
   bottom: 50%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
}
.wrapper__top > h3 {
   text-align: center;
} 
.wrapper__buttom  {
    margin: 0 auto;
}
</style>
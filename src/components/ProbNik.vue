<template lang="">
   <v-container>
        <v-row>
             <v-col>
                  <HomeVue></HomeVue>
                  <v-dialog width="500">
                     <template #activator="{ on }">
                        <v-btn v-on="on" color="grey darken-1" class="ml-2">Registration</v-btn>
                        <v-btn v-on="on" color="grey darken-1">Add new cost <v-icon>mdi-plus</v-icon></v-btn>
                     </template>
                     <v-card>
                        <AddForm></AddForm>
                        <!-- Как сделать условие, что бы при клике на кнопку Registration, открывалась форма регистрвции --> 
                     </v-card>
                  </v-dialog>
                  <PaymondDisplay></PaymondDisplay>
                  <MyPagination></MyPagination>
                  <ContextMenu></ContextMenu>
             </v-col>
             <v-col>
                  DIAGRAMM
             </v-col>
        </v-row>
   </v-container>
</template>
<script>
import AddForm from "./AddForm.vue";
import PaymondDisplay from "../components/PaymondDisplay.vue";
import HomeVue from "../components/HomeVue.vue";
import MyPagination from '../components/MyPagination.vue';
import ContextMenu from "../components/ContextMenu";





export default {
   name: 'ProbNik',
   components: {  PaymondDisplay, HomeVue, MyPagination, ContextMenu, AddForm, },
 
   data (){
     return {
          modalShow: false,
          settings: {},


     }
   },
       methods: {
      fetchData (){
        return     [
                {    id: 1,
                     date: '28.03.2020',
                     category: 'Food',
                     value: 169,
                },
                {    id: 2,
                     date: '24.03.2020',
                     category: 'Transport',
                     value: 360,
                }                ,
                {    id: 3,
                     date: '24.03.2020',
                     category: 'Food',
                     value: 532,
                },
                {    id: 4, 
                     date: "23.03.2020", 
                     category: "Entertaiment", 
                     value: 969 
                },
                {    id: 5, 
                     date: "24.03.2020", 
                     category: "Education", 
                     value: 1500 
                },
                {    id: 6, 
                     date: "25.03.2020", 
                     category: "Food", 
                     value: 200 
                },
                {    id: 7, 
                     date: "25.03.2020", 
                     category: "Food", 
                     value: 200 
                },
                {    id: 8, 
                     date: "25.03.2020", 
                     category: "Food", 
                     value: 200 
                },
                {    id: 9, 
                     date: "25.03.2020", 
                     category: "Food", 
                     value: 200 
                },
                {    id: 10, 
                     date: "25.03.2020", 
                     category: "Food", 
                     value: 200 
                }

              ]

      },
      fetchCategory(){
        return ['Food', 'Transport', 'Education', 'Entertainment', 'Sport']
      },
      onShow(data){
           this.settings = data
           this.modalShow = true
      },
      onHide(){
           this.settings = {};
           this.modalShow = false
      },
     // onenModalForm(){
     //     this.$modal.Show('addform', {title: 'Add form', component: 'addform'})
     //  },
     //  onenModalFormReg (){
     //     this.$modal.Show('auth', {title: 'Registration Form', component: 'auth'})
     //  }
    },
      created() {
        this.$store.commit('setPaymentsListData', this.fetchData());
        this.$store.commit('setCategoryList', this.fetchCategory());
      },
      mounted() {
          this.$modal.EventBus.$on('show', this.onShow);
          this.$modal.EventBus.$on('hide', this.onHide)
      },
      beforeDestroy() {
          this.$modal.EventBus.$off('show', this.onShow);
          this.$modal.EventBus.$off('hide', this.onHide)
      },
}
</script>
<style>

</style>
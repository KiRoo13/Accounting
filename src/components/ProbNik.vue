<template lang="">
   <div>
    <HomeVue></HomeVue>
    <MyButton></MyButton>
    <AddForm></AddForm>
    <PaymondDisplay></PaymondDisplay>
    <MyPagination></MyPagination>
   </div>
</template>
<script>

import AddForm from "../components/AddForm.vue";
import PaymondDisplay from "../components/PaymondDisplay.vue";
import MyButton from "../components/MyButton.vue";
import HomeVue from "../components/HomeVue.vue";
import MyPagination from '../components/MyPagination.vue';
export default {
   name: 'ProbNik',
   components: { AddForm, PaymondDisplay, MyButton, HomeVue, MyPagination },
   data (){
     return {

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
        return ['Food', 'Transport', 'Education', 'Entertainment']
      }
    },
      created() {
        this.$store.commit('setPaymentsListData', this.fetchData());
        this.$store.commit('setCategoryList', this.fetchCategory());
      },
}
</script>
<style lang="">
   
</style>
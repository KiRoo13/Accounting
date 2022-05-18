<template lang="">
   <div>
    <HomeVue></HomeVue>
    <MyButton></MyButton>
    <transition name="fade">
           <ModalWindow :settings="settings" v-if="modalShow"></ModalWindow>
    </transition>
           <ContextMenu></ContextMenu>
    <PaymondDisplay></PaymondDisplay>
    <MyPagination></MyPagination>
   </div>
</template>
<script>

import PaymondDisplay from "../components/PaymondDisplay.vue";
import MyButton from "../components/MyButton.vue";
import HomeVue from "../components/HomeVue.vue";
import MyPagination from '../components/MyPagination.vue';
import ModalWindow from '../components/ModalWindow.vue'
import ContextMenu from "../components/ContextMenu";
export default {
   name: 'ProbNik',
   components: {  PaymondDisplay, MyButton, HomeVue, MyPagination, ModalWindow, ContextMenu},
   data (){
     return {
          modalShow: false,
          settings: {}
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
      },
      onShow(data){
           this.settings = data
           this.modalShow = true
      },
      onHide(){
           this.settings = {};
           this.modalShow = false
      }
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
.fade-enter-active, .fade-leave-active {
transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
opacity: 0;
}
</style>
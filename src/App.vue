<template>
  <div id="app">
    <HelloVue></HelloVue>
    <MyButton></MyButton>
    <AddForm></AddForm>
    <PaymondDisplay></PaymondDisplay>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import HelloVue from "./components/HelloVue.vue";
import AddForm from "./components/AddForm.vue";
import PaymondDisplay from "./components/PaymondDisplay.vue";
import MyButton from "./components/MyButton.vue";
export default {
    data() {
        return {
          cur: 1,
          n: 5,
        }
    },
    components: { HelloVue, AddForm, PaymondDisplay, MyButton, },
    methods: {
      fetchData (){
        return     [
                {
                     date: '28.03.2020',
                     category: 'Food',
                     value: 169,
                },
                {
                     date: '24.03.2020',
                     category: 'Transport',
                     value: 360,
                }                ,
                {
                     date: '24.03.2020',
                     category: 'Food',
                     value: 532,
                },
            ]

      },
      computed: {
        ...mapGetters(["getPaymentsList"])
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

<style lang="scss">



</style>

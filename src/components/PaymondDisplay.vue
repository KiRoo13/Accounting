<template lang="">
   <div>
      <div v-for="item in PaymentsList" :key="item.value">
      {{ item}}
      </div>
      <strong> Сумма: {{ getSum }} </strong>
   </div>
</template>
<script>

export default {
   name: "PaymondDisplay",
   data() {
      return {
        
      }
   },
   methods: {

   },
   computed: {
      getSum (){
         return this.$store.getters.getFullPaymentValue
      },
      PaymentsList (){
         return this.$store.getters.getPaymentsList
      }
   }
}
</script>
<style lang="">
   
</style>
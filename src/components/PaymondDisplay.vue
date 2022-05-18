<template lang="">
   <div class="list">
      <div v-for="item in SortList" :key="item.id">
      {{ item }} <div class="cursor" @click="openMenu(item)">...</div>
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
         openMenu(item){
            const items = [
               {text: 'Edit', item: item},
               {text: 'Delete', item: item}
            ]
            this.$contextMenu.Show(items)
         }
   },
   computed: {
      getSum (){
         return this.$store.getters.getFullPaymentValue
      },
      SortList (){
         return this.$store.getters.getSortList
      }
   },
   mounted() {
   },
}
</script>
<style scoped>
   .list{
      margin-top: 15px;
   }
   .list > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
   }
   .cursor {
      font-size: 20px;
      margin-left: 12px;
      width: 10px;
      height: 10px;
      cursor: pointer;
      transform: rotate(90deg);
   }
</style>
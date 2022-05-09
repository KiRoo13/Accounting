<template lang="">
   <div>
      <div class="flex">
         <ul class="flex_list" >
             <li @click="changePage(p)" v-for="p in Page" :key="p">{{ p }}</li>
         </ul>
      </div>
   </div>
</template>
<script>

export default {
   name: "MyPagination",
   data() {
      return {
           count: 3,
      }
   },
   methods: {
       changePage(p){
         if (p === 1){
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(0, this.count))
          } else if(p === 2) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(3, 6))
          }else if(p === 3) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(6, 9))
          }else if(p === 4) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(9, 12))
          }else if(p === 5) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(12, 15))
          }else if(p === 6) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(15, 18))
          }else if(p === 7) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(18, 21))
          }else if(p === 8) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(21, 24))
          }else if(p === 9) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(24, 27))
          }else if(p === 10) {
             this.$store.commit('clearSortList')
             this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(27, 30))
          }
      },
   },
   computed: {
      Page (){
         return Math.ceil( this.$store.getters.getPage / this.count)
      }
   },
   mounted() {
       this.$store.commit('setSortList', this.$store.getters.getPaymentsList.slice(0, this.count))
   },
}
</script>
<style lang="scss" scoped>
   .flex{
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .active {
      border: 2px solid red;
   }
   .flex_list {
      width: 300px;
      list-style-type: none;
      display: flex;
      align-items: center;
   }
   .flex_list > li {
     margin-right: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 30px;
     height: 30px;
     border: 1px solid black;
   }
</style>
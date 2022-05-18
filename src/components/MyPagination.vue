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
             this.$store.getters.getPaymentsList.slice(0, this.count).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          } else if(p === 2) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(3, 6).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 3) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(6, 9).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 4) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(9, 12).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 5) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(12, 15).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 6) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(15, 18).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 7) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(18, 21).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 8) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(21, 24).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 9) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(24, 27).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }else if(p === 10) {
             this.$store.commit('clearSortList')
             this.$store.getters.getPaymentsList.slice(27, 30).forEach(element => {
             this.$store.commit('setSortList', element)
      })
          }
      },
   },
   computed: {
      Page (){
         return Math.ceil( this.$store.getters.getPage / this.count)
      }
   },
   mounted() {
       this.$store.getters.getPaymentsList.slice(0, this.count).forEach(element => {
          this.$store.commit('setSortList', element)
      });
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
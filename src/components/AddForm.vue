<template >
   <div>
      <div v-if="$store.getters.getShow">
         <input v-model="date" type="text" placeholder="date">
         <select v-model="category">
             <option v-for="category in CategoryList" :key="category">{{category}}</option>
         </select>
         <input v-model.number="value" type="text" placeholder="value">
         <button @click="onSaveClick">Save</button>
      </div>
   </div>
</template>
<script>

export default {
   name: "AddForm",
   data() {
      return {
         date: "",
         category: "",
         value: ""
      }
   },
      methods: {
         onSaveClick (){
            const data = {
               date: this.date || this.getData,
               category: this.category,
               value: this.value
            }
            this.$store.commit('addDataToPaymentsList', data)
         },
   },
   computed: {
      getData (){
            const day = new Date()
            const d = day.getDate()
            const m = day.getMonth()+1
            const y = day.getFullYear()
            return `${d} ${m} ${y}`
      },
      CategoryList (){
             return this.$store.getters.getCategoryList
      }
   }
}
</script>
<style lang="scss" scoped>
   input {
      margin-right: 5px
   }
</style>
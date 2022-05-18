<template >
   <div>
      <div>
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
               id: Math.round(Math.random() * 1000),
               date: this.date || this.getData,
               category: this.category,
               value: this.value
            }
            this.$store.commit('addDataToPaymentsList', data)
         },
   },
   computed: {
      getData (){
            let date = (new Date()).toString().split(' ').splice(1,3).join(' ');
            return date
      },
      CategoryList (){
             return this.$store.getters.getCategoryList
      },
   },
   mounted() {

    const addit = {
    date:  this.date =  this.getData,
    category:  this.category =  this.$route.params.category,
    value: this.value = Number(this.$route.params.value) || ''
    }
        if (!this.$route.params.value && !this.$route.params.category){
            return
        } else {
            setTimeout(()=>{
              this.$store.commit('setSortList', addit)
         }, 2000)
      }
   },
   created() {

   },
}
</script>

<style lang="scss" scoped>
   input {
      margin-right: 5px
   }
</style>
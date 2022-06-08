<template >
   <v-card class="pa-2" loading>
      <div>
         <v-text-field v-model="date" label="Date"></v-text-field>
         <v-select v-model="category" label="Category" :items="CategoryList"></v-select>
         <v-text-field v-model.number="value" label="Value"></v-text-field>
         <v-btn color="grey darken-1" @click="onSaveClick">Save</v-btn>
      </div>
   </v-card>
</template>
<script>

export default {
   name: "AddForm",
   props: {
      item: Object
   },
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
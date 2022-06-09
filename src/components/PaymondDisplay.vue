<template lang="">
   <v-container class="mt-3">
      <v-row>
         <v-col>#</v-col>
         <v-col>Date</v-col>
         <v-col>Caterory</v-col>
         <v-col>Value</v-col>
         <v-col>Actions</v-col>
      </v-row>
      <v-row v-for="item in SortList" :key="item.id">
         <v-col>{{ item.id }}</v-col>
         <v-col>{{ item.date }}</v-col>
         <v-col>{{ item.category }}</v-col>
         <v-col>{{ item.value }}</v-col>
         <v-col class="corsor" @click="openMenu(item)"><v-icon>{{ icons.mdiShareVariant }}</v-icon></v-col>
      </v-row>
       <div class="list">
          <strong> Сумма: {{ getSum }} </strong>
       </div>
   </v-container>
</template>
<script>
  import {
    mdiShareVariant,
   } from '@mdi/js'

export default {
   name: "PaymondDisplay",
   data() {
      return {
      icons: {
        mdiShareVariant
      },
      }
   },
   methods: {
         openMenu(item){
            const items = [
               {text: 'Edit', item: item},
               {text: 'Delete', item: item}
            ]
            this.$contextMenu.Show(items)
            // Не понимаю, какое тут написать условие, что бы при повторном клике вызывать this.$contextMenu.Hide()
            // и меню закрывалось
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
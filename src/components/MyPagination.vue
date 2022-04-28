<template lang="">
   <div>
      <div class="flex">
         <ul class="flex_list">
            <li>1</li>
            <li>2</li>
         </ul>
      </div>
   </div>
</template>
<script>
export default {
   name: "MyPagination",
   data() {
      return {
           
      }
   },
   methods: {
   }
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
      width: 100px;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .flex_list > li {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 30px;
     height: 30px;
     border: 1px solid black;
   }
</style>
<template lang="">
   <div>
      <button @click="oneClick">Add new cost</button>
   </div>
</template>
<script>
export default {
   data() {
      return {
         
      }
   },
   methods: {
      oneClick(){
         this.$store.commit("chenchShow")
      }
   },
}
</script>
<style lang="">
   
</style>
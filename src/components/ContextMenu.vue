<template>
   <div>
      <transition name="fade">
         <div v-if="shown" class="context">
             <div @click="onClick">Delete</div>
            <v-dialog width="500">
            <template #activator="{ on }">
               <div v-on="on">Edit</div>
            </template>
            <v-card>
               <AddForm></AddForm>
            </v-card>
         </v-dialog>
         </div>
      </transition>
   </div>
</template>
<script>
import AddForm from './AddForm.vue'

export default {
   name: 'ContextMenu',
   components: { AddForm },
   data() {
      return {
         shown: false,
         items: []
      }
   },
   methods: {
      onClick(e){
         if (e.target.innerText === 'Edit'){
            this.editItem(this.items[0].item)
         } else if (e.target.innerText === 'Delete'){
            this.deleteItem(this.items[0].item)
         }
      },
      editItem(item){
         console.log(item)
         // this.editedItem = Object.assign({}, item)
      },

      deleteItem(item){
             this.$store.commit('removeElem', item.id)
      },
      onShow(items){
       this.items = items
       this.shown = true
      },
      onHide(){
       this.shown = false
       this.items = []
      }
   },
   mounted() {
      this.$contextMenu.EventBus.$on('show', this.onShow)
      this.$contextMenu.EventBus.$on('hide', this.onHide)
   },
   beforeDestroy() {
      this.$contextMenu.EventBus.$off('show', this.onShow)
      this.$contextMenu.EventBus.$off('hide', this.onHide)
   },
}
</script>
<style scoped>
   .context{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 50px;
      width: 100px;
      left: 45%;
      top: 20%;
      position: absolute;
      border-radius: 10px;
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);;
   }
   .context__list {
      margin: 0 auto;
   }
   .context > div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
   }
   .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
   }
   .fade-enter, .fade-leave-to {
      opacity: 0;
   }
</style>
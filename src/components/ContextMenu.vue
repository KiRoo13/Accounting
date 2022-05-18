<template>
   <div>
      <transition name="fade">
         <div v-if="shown" class="context">
             <div v-for="item in items" :key="item.text" @click="onClick">{{ item.text }}</div>
         </div>
      </transition>
   </div>
</template>
<script>


export default {
   name: 'ContextMenu',
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
      editItem(){

          // Остался только метод изменения, не понятно как его реализовать, потому, что пришлось уйти от
          // той реализации кода, которую показывали на уроке, из-за не выполнения функций в acttions 

          // До конца не понял, как работает EventBus, с модалкой как-то было проще, отсюда вопрос.

          // Зачем использовать EventBus, если у нас есть Vuex, который обечпечивает достут к данным,
          // из любого места приложения?
      },

      deleteItem(item){
             this.$store.commit('removeElem', item.id)
             // Не срабатывает commit не понятно почему, все проверил, все данные приходят, 
             // но состояние state не меняется. Подскажите, что не так ?
             // По сути, метод реализован.
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
      left: 65%;
      position: absolute;
      border-radius: 10px;
      background-color: rgb(169, 174, 174);
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
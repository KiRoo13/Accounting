export default {
   install(Vue){
      if (this.installed){
         return
      }
      this.installed = true;
      Vue.prototype.$contextMenu = {
         EventBus: new Vue(),
         Show(items){
            this.EventBus.$emit('show', items)
         },
         Hide(items){
            this.EventBus.$emit('hide', items)
         }
      }
   }
}
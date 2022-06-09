export default {
   install(Vue){
      if (this.installed){
         return
      }
      this.installed = true;
      Vue.prototype.$modal = {
         EventBus: new Vue(),
         Show(name, settings){
            this.EventBus.$emit('show', {name, ...settings})
         },
         Hide(){
            this.EventBus.$emit('hide')
         }
      }
   }
}
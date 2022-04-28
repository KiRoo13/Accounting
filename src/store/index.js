
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PaymondList: [],
    CategoryList: [],
    show: false
  },
  getters: {
    getPaymentsList: state => state.PaymondList,

    getCategoryList: state => state.CategoryList,

    getFullPaymentValue (state){
          return state.PaymondList.reduce((el, acc)=>{
              return el + acc.value
          }, 0)
    },
    getShow: state => state.show
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.PaymondList = payload;
    },
    setCategoryList (state, payload){
      state.CategoryList = payload
    },

    addDataToPaymentsList (state, payload){
      state.PaymondList.push(payload)
    },
    chenchShow(state){
      state.show = true
    }
  },
  actions: {

  },
  modules: {
    
  }
})

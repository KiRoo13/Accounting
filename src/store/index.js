
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SortList: [],
    PaymondList: [],
    CategoryList: [],
    show: false
  },
  getters: {
    getPaymentsList: state => state.PaymondList,

    getCategoryList: state => state.CategoryList,

    getSortList: state => state.SortList,

    getFullPaymentValue (state){
          return state.PaymondList.reduce((el, acc)=>{
              return el + acc.value
          }, 0)
    },
    getShow: state => state.show,
    getPage (state){
       let page = state.PaymondList.length
       return page
    }
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.PaymondList = payload;
    },
    setSortList (state, payload){
       state.SortList.push(payload)
    },
    setCategoryList (state, payload){
      state.CategoryList = payload
    },

    addDataToPaymentsList (state, payload){
      state.PaymondList.push(payload)
    },
    changeShow(state){
      state.show = true
    },
    clearSortList(state){
      state.SortList = []
    }
  },
  actions: {

  },
  modules: {
    
  }
})

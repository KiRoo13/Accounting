<template>
   <div>
      <router-link :to="{path: '/add/payment/Food/200', params: {date: 'Paymend', category: 'Food', value: '200'}}">Добавить платеж категории Food с ценой 200</router-link><br>
      <router-link :to="{path: '/add/payment/Transport/50', params: {date: 'Paymend', category: 'Transport',value: '50'}}">Добавить платеж категории Transport с ценой 50</router-link><br>
      <router-link :to="{path: '/add/payment/Entertainment/2000', params: {date: 'Paymend', category: 'Entertainment',value: '2000'}}">Добавить платеж категории Entertainment с ценой 2000</router-link>
   </div>
</template>
<script>
export default {
   name: 'MyP'
}
</script>
<style>
   
</style>
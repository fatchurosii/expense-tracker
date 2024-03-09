

<template>
  <div class="py-10 max-w-[414px] mx-auto">
    <div>
      <h1 class="text-3xl font-semibold text-center text-white font-body">Expense Tracker</h1>
      <div class="py-5">
        <HeaderSummary 
        :balance="+balance"
        :income="+income"
        :outcome="+outcome"/>
        <ListTransaction :transactions="transactions"/>
        <Bottom @submitTransaction="addTransaction"/>
      </div>
    </div>
  </div>

</template>
<script setup>
import HeaderSummary from './components/HeaderSummary.vue'
import ListTransaction from './components/ListTransaction.vue'
import Bottom from './components/Bottom.vue'
import { ref, computed, onMounted } from 'vue'
import {useToast} from 'vue-toastification'

const transactions = ref([])
// const transactions = ref( [
//     {
//         id : 1,
//         name : 'Belanja',
//         amount : 10000,
//         type : 1,
//         date : '2022-12-31'
//     },
//     {
//         id : 2,
//         name : 'Gaji',
//         amount : 10000,
//         type : 2,
//         date : '2022-12-31'
//     }
//  ]);
 onMounted(()=>{
   const transactionValue = JSON.parse(localStorage.getItem('transactions'))
   if(transactionValue){
     transactions.value = transactionValue
   }
 })
 const toast = useToast()
 const balance = computed(()=>{
   return transactions.value.reduce((acc, transactions)=>{
     return transactions.type == 2 ? acc + transactions.amount : acc - transactions.amount
   },0)
 }) 
 const income = computed(()=>{
   return transactions.value.reduce((acc, transactions)=>{
     return transactions.type == 2 ? acc + transactions.amount : acc
   },0)
 })
 const outcome = computed(()=>{
   return transactions.value.reduce((acc, transactions)=>{
     return transactions.type == 1 ? acc + transactions.amount : acc
   },0)
 })
//  console.log(transactionData)
 const addTransaction = (transactionData)=>{
  if(transactionData.type == 1 && transactionData.amount > balance.value) {
    toast.error('Uang Tidak Cukup')
    return
  }
   transactions.value.push({
    id: transactions.value.length + 1,
    ...transactionData
   })
   saveTransaction()
   toast.success('Transaksi berhasil disimpan')
 }
 const saveTransaction = () => {
   localStorage.setItem('transactions', JSON.stringify(transactions.value))
 }
</script>
<style scoped>

</style>

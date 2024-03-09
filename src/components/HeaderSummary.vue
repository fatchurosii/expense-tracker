<template>
    <div class="py-5">
        <h1 class="py-3 text-3xl font-semibold text-white font-body">
           Current Balance
        </h1>
        <h1 class="text-3xl font-semibold text-white font-body">{{formatRupiah(total.balance) }}</h1>
    </div>
    <div class="flex justify-between gap-5 font-body">
        <div class="card p-5 px-12 bg-emerald-50 border border-emerald-200 rounded-lg shadow-[5px_5px_0px_0px] shadow-emerald-200">
            <h5 class="font-medium text-emerald-500">Pemasukan</h5>
            <h3 class="text-lg font-semibold text-emerald-600">{{formatRupiah(total.income)}}</h3>
        </div>
        <div class="card p-5 bg-rose-50 shadow-[5px_5px_0px_0px] border border-rose-200 shadow-rose-300 rounded-lg px-12">
            <h5 class="font-medium text-center text-rose-500 text-md">Pengeluaran</h5>
            <h3 class="text-lg font-semibold text-rose-600">{{formatRupiah(total.outcome)}}</h3>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const total = defineProps({
    balance : Number,
    income : Number,
    outcome : Number
})
const formatRupiah = (val) => {
    const numericAmount = Number(val);
  if (!isNaN(numericAmount)) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(numericAmount);
  }
}
</script>
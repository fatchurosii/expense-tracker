<template>
   <div class="card bg-slate-100 shadow-[5px_5px_0px_0px] shadow-teal-500 p-5 rounded-md border border-teal-600">
      <div class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
         <div class="sm:col-span-3">
            <label class="block text-sm font-semibold leading-6 text-gray-900 font-body">Nama Transaksi</label>
            <input
             type="text"
             v-model="name"
             class="block w-full rounded-md px-3 py-1.5 ring-1 ring-inset focus:ring-1 ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-indigo-600"
             placeholder="Masukkan Nama"
             />
          </div>
         <div class="sm:col-span-3">
           <label  class="block text-sm font-semibold leading-6 text-gray-900 font-body">Amount</label>
           <input
            type="text"
            v-model="amount"
            @input="formatRupiah"
            class="block w-full rounded-md px-3 py-1.5 ring-1 ring-inset focus:ring-1 ring-gray-300 focus:ring-inset sm:text-sm sm:leading-6 focus:ring-indigo-600"
            placeholder="10.000"
            />
         </div>
         
         <div class="sm:col-span-3">
            <label class="block text-sm font-semibold leading-6 text-gray-900 font-body">Type</label>
            <div class="mt-2">
              <select class="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6" v-model="type">
               <option value="0" disabled>Pilih Tipe</option>
                <option value="1">Pengeluaran</option>
                <option value="2">Pemasukan</option>
              </select>
            </div>
         </div>
         <div class="sm:col-span-3">
            <label  class="block text-sm font-semibold leading-6 text-gray-900 font-body">Date</label>
            <div class="mt-2">
               <app-datepicker v-model:value="date" style="width: 100%;" format="YYYY-MM-DD" value-type="YYYY-MM-DD" type="date" placeholder="Pilih Tanggal"></app-datepicker>
            </div>
         </div>
         <div class="py-3 sm:col-span-3">
            <a href="javascript:void(0)" @click="save" class="relative inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
               <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-indigo-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
               <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
               <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-indigo-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
               <span class="relative text-indigo-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Sumbit</span>
               </a>
         </div>
      </div>
   </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import {useToast} from 'vue-toastification'
   const date = ref('')
   const amount = ref('')
   const type = ref(0);
   const name = ref('')
   const toast = useToast()
   const emit = defineEmits(['submitTransaction'])
   const formatRupiah = () => {
   amount.value = String(amount.value).replace(/\D/g, '');
   };
   const save = () =>{
      if(date.value == '' || amount.value == '' || type.value == 0 || !name.value){
         toast.error('Data Tidak Boleh Kosong')
         return;
      }
      const transactionData = {
      date : date.value,
      amount : Number(amount.value),
      type : type.value,
      name : name.value
      }
   emit('submitTransaction', transactionData)
   date.value = ''
   amount.value = ''
   type.value = 0
   name.value = ''
   }
   
</script>

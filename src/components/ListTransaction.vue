<template>
    <div class="py-5 rounded-md">
        <div class="flex justify-between w-full">
            <h1 class="text-lg font-medium text-white text-dark font-body">Recent Expenses</h1>
            <h1 class="font-medium text-slate-400 font-body text-md">See all</h1>
        </div>
        <div class="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-auto max-h-[250px] ">
            <template v-for="ctx in transactions" :key="ctx.id">
                <div class="card bg-slate-100  p-5 rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)] border border-indigo-500">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <svg v-if="ctx.type == 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                              </svg>
                              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <div class="flex flex-col">
                                  <h5 class="text-base font-semibold">{{ ctx.name }}</h5>
                                  <p class="text-sm font-medium text-slate-400">{{ctx.date}}</p>                          
                              </div>
                        </div>
                        <div class="text-xl font-semibold " :class="ctx.type == 1 ? 'text-rose-500' : 'text-emerald-500'">
                            <h5> <span class="font-bold">{{ctx.type == 1 ? '-' : '+'}}</span> {{ formatRupiah(ctx.amount) }} </h5>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
 import {defineProps, computed} from 'vue'
 const props = defineProps({
    transactions :{
        type : Array,
        required : true
    }
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
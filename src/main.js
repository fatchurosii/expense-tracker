import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueDatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App)

app.component('app-datepicker', VueDatePicker);
app.use(Toast);
app.mount('#app')
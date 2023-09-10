<script setup>
import Offcanvas from '@/layouts/offcanvas.vue';
import { useStore } from '@/stores/index'
import { ref, onUpdated } from 'vue';

const props = defineProps(['entrie'])

const title = ref()
onUpdated(() => {
  title.value = props.entrie?.title
  //useStore().entries[0].title = title.value
})

</script>

<template>
  <offcanvas title="Edit">
    <pre>{{ entrie }}</pre>
    <button class="btn" @click="useStore().remove" data-bs-dismiss="offcanvas">remove</button>
    <input type="text" class="form-control" /> <!-- v-model="title" -->

  </offcanvas>
</template>

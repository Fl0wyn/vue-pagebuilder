<script setup>
import Offcanvas from '@/layouts/offcanvas.vue';
import { useStore } from '@/stores/index'

const layouts = useStore().layouts
const add = (layout) => useStore().add(layout)
const getImage = (layout) => new URL(`../../assets/images/preview-${layout}.png`, import.meta.url);
</script>

<template>
  <offcanvas title="Add">
    <img v-for="layout in layouts" @click="add(layout)" data-bs-dismiss="offcanvas" :src="getImage(layout)" />
  </offcanvas>
</template>
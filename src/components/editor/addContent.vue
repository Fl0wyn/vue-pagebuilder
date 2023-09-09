<script setup>
import { useStore } from '@/stores/index'

const getImage = (layout) => new URL(`../../assets/images/preview-${layout}.png`, import.meta.url);
</script>

<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasEnd-add">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title">Add content</h2>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <img v-for="layout in useStore().layouts" @click="useStore().add(layout)" :src="getImage(layout)" />
    </div>
  </div>
</template>

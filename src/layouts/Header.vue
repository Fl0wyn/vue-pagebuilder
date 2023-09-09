<script setup>
import iconAdd from "@/components/icons/iconAdd.vue";
import iconSave from "@/components/icons/iconSave.vue";
import iconPreview from "@/components/icons/iconPreview.vue";

import { useStore } from '@/stores/index'
import { ref, onMounted, onUpdated } from "vue";

import { useWindowSize, useBreakpoints, breakpointsBootstrapV5 } from '@vueuse/core'
// https://vueuse.org/core/useBreakpoints/
const breakpoints = useBreakpoints(breakpointsBootstrapV5)
// https://vueuse.org/core/useWindowSize/
const { width, height } = useWindowSize()

const checkBreakpoint = () => {
  if (breakpoints.between('sm', 'md').value) breakpoint.value = 'sm'
  if (breakpoints.between('md', 'lg').value) breakpoint.value = 'md'
  if (breakpoints.between('lg', 'xl').value) breakpoint.value = 'lg'
  if (breakpoints.between('xl', 'xxl').value) breakpoint.value = 'xl'
  if (breakpoints['xxl'].value) breakpoint.value = 'xxl'
}
const breakpoint = ref()

onMounted(() => checkBreakpoint());
onUpdated(() => checkBreakpoint());
</script>

<template>
  <header class="navbar navbar-light user-select-none">
    <div class="container-xl">
      <h1 class="navbar-brand">
        <img src="/logo.svg" class="navbar-brand-image" />
        {{ useStore().title }}
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item d-none d-md-flex me-3">
          <div class="btn-list">
            <button class="btn" data-bs-toggle="offcanvas" href="#offcanvasEnd-add">
              <icon-add />
              Add
            </button>
            <button class="btn" @click="useStore().save">
              <icon-save />
              Save
            </button>
            <button class="btn" @click="useStore().preview">
              <icon-preview />
              Preview
            </button>
            <div class="text-secondary">
              <div>{{ width }} x {{ height }}</div>
              <div>Bootstrap: {{ breakpoint }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

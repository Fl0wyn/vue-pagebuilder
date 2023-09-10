<script setup>
const props = defineProps(["item"]);
import { useStore } from '@/stores/index'

const layout = 'one'
</script>

<template>
  <section v-if="item.layout === layout" :id="item.id" :class="'pointer py-4', { 'editable': useStore().editable }"
    data-bs-toggle="offcanvas" href="#offcanvasEnd-Edit">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <template v-if="item.image">
            <img :src="item.image" />
            <h3>{{ item.title }}</h3>
          </template>
          <template v-else>
            <img src="@/assets/images/placeholder.webp" />
            <h3>{{ item.title }}</h3>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

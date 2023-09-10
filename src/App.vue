<script setup>
import vpbHeader from '@/layouts/Header.vue'
import vpbEditorAdd from "@/components/editor/editorAdd.vue";
import vpbEditorEdit from "@/components/editor/editorEdit.vue";
import vpbOne from "@/components/sections/sectionOne.vue";
import vpbTwo from "@/components/sections/sectionTwo.vue";
import { useStore } from '@/stores/index'

import { onMounted, ref } from "vue";

const entries = useStore().entries
let editable = useStore().editable

document.title = useStore().title

if (window.location.hash === '#preview') {
  editable = false
  document.title = document.title + ' - Preview'
}


// const urlParams = new URLSearchParams(window.location.search);
// const product = urlParams.set('joe')
// //const product = urlParams.get('product')
// console.log(product);
// onMounted(() => {
//   let url = new URL(window.location.href);
//   url.searchParams.append('x', 42);
// })

const selectId = (id) => {
  console.log(id)
  window.location.hash = id
}
</script>

<template>
  <div class="page">
    <vpb-header v-if="editable" />
    <div class="page-wrapper">
      <div class="page-body">
        <div class="container-xl">
          <div v-for="entrie in entries" @click="selectId(entrie.id)" data-bs-toggle="offcanvas"
            href="#offcanvasEnd-edit">
            <vpb-one :item="entrie" :editable="editable" />
            <vpb-two :item="entrie" :editable="editable" />
            <!-- <component :is="entrie.layout" :item="entrie" /> -->
          </div>
        </div>
      </div>
    </div>
    <vpb-editor-add />
    <vpb-editor-edit />
  </div>
</template>

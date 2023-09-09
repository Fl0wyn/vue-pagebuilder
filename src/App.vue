<script setup>
import vpbHeader from '@/layouts/Header.vue'
import vpbEditor from "@/components/editor/editorLayout.vue";
import vpbOne from "@/components/sections/sectionOne.vue";
import vpbTwo from "@/components/sections/sectionTwo.vue";
import { useStore } from '@/stores/index'

const entries = useStore().entries
let editable = useStore().editable

document.title = useStore().title

if (window.location.hash === '#preview') {
  editable = false
  document.title = document.title + ' - Preview'
}
</script>

<template>
  <div class="page">
    <vpb-header v-if="editable" />
    <div class="page-wrapper">
      <div class="page-body">
        <div class="container-xl">
          <div v-for="entrie in entries">
            <vpb-one :item="entrie" :editable="editable" />
            <vpb-two :item="entrie" :editable="editable" />
            <!-- <component :is="entrie.layout" :item="entrie" /> -->
          </div>
        </div>
      </div>
    </div>
    <vpb-editor />
  </div>
</template>

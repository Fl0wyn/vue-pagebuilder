<script setup>
import vpbHeader from '@/layouts/Header.vue'
import vpbEditorAdd from "@/components/editor/editorAdd.vue";
import vpbEditorEdit from "@/components/editor/editorEdit.vue";
import vpbOne from "@/components/sections/sectionOne.vue";
import vpbTwo from "@/components/sections/sectionTwo.vue";
import { useStore } from '@/stores/index'

document.title = useStore().title

if (window.location.pathname === '/preview') {
  useStore().editable = false
  document.title = document.title + ' - Preview'
}

const changeId = (id) => useStore().currentId = id
</script>

<template>
  <div class="page">

    <vpb-header v-if="useStore().editable" />
    <div class="page-wrapper">
      <div class="page-body">
        <div class="container-xl">
          <div v-for="entrie in useStore().entries" @click="changeId(entrie.id)">
            <vpb-one :item="entrie" />
            <vpb-two :item="entrie" />
            <!-- <component :is="entrie.layout" :item="entrie" /> -->
          </div>
        </div>
      </div>
    </div>

    <vpb-editor-add />
    <vpb-editor-edit :entrie="useStore().entries.find(entrie => entrie.id === useStore().currentId)" />

  </div>
</template>

<script setup>
import { useStore } from '@/stores/index'
const entries = useStore().entries



</script>

<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasEnd-edit">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title">Edit</h2>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <pre>{{entries}}</pre>
    </div>
  </div>

  <!-- <transition name="slide-right">
    <div class="editor slidein-right" v-if="item" spellcheck="false">
      <div class="editor-header">
        <h4 class="float-left">Edit</h4>
        <div class="close" @click="item = false">&times;</div>
      </div>
      <div class="editor-content">
        <div v-for="(val, key) in fields">
          <div class="label">{{ key.replace("_", " ") }}</div>

          <input type="text" class="form-control" v-if="val == 'txt'" v-model="item[key]" />
          <textarea class="form-control" v-if="val == 'rte'" v-model="item[key]"></textarea>

          <image v-if="val == 'img'" v-bind:mykey="key" @image="setImage"></image>

          <input v-if="val == 'vid'" type="text" class="form-control" v-model="item[key]" />
        </div>

        <span v-if="item.layout != 'header'">
          <div class="label">Options</div>
          <div class="btn-group w-100">
            <button class="btn btn-outline-secondary w-50" @click="moveItem(item.id)">
              Move Down
            </button>
            <button class="btn btn-outline-secondary w-50" @click="deleteItem(item.id)">
              Delete
            </button>
          </div>
        </span>

        <button class="btn btn-outline-success mb-5 w-100 save" @click="save">
          Save
        </button>
      </div>
    </div>
  </transition>

  <add :layouts="layouts" :entries="entries"></add> -->
</template>

<script setup>
import { useStore } from '@/stores/index'
const entries = useStore().entries
const layouts = useStore().layouts

import { ref, onMounted, computed } from "vue";
import Add from "@/components/editor/editorAdd.vue";
import Image from "@/components/editor/editorImageResize.vue";

const item = ref(false);
const fields = ref(false);

const save = () => {
  console.log(JSON.stringify(this.entries));
  item.value = false;
};

const setImage = (e) => {
  item.value[e.key] = e.value;
};

const deleteItem = (id) => {
  useStore().remove(id)
  item.value = false;
};

const moveItem = (id) => {
  var from = entries.findIndex((x) => x.id == id);
  var to = from + 1;
  console.log(from);
  console.log(to);
  var f = entries.splice(from, 1)[0];
  entries.splice(to, 0, f);
};

onMounted(() => {

  document.body.addEventListener("click", function (e) {
    if (e.target.closest(".editable")) {
      let el = e.target.closest(".editable");
      let id = el.id;
      item.value = entries.filter((x) => x.id === id)[0];

      let myfields = el.getAttribute("data-fields");
      let params = new URLSearchParams(myfields);
      myfields = Object.fromEntries(params.entries());
      fields.value = myfields;
    }
  });
});
</script>

<template>
  <!--   <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEnd-edit" aria-labelledby="offcanvasEndLabel-edit">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasEndLabel-edit">Edit content</h2>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
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

    </div>
  </div> -->

  <!-- <div class="d-flex align-items-center justify-content-center gap-2">
    <button class="btn btn-white" data-bs-toggle="offcanvas" href="#offcanvasEnd-edit" role="button"
      aria-controls="offcanvasEnd-edit">
      <icon-add />
      Add
    </button>
    <button class="btn btn-white" @click="downloadFile">
      <icon-save />
      Save
    </button>
  </div> -->

  import { computed } from "vue";
const props = defineProps({ modelValue: String });
const emits = defineEmits(["update:modelValue"]);
const value = computed({
  get() { return props.modelValue },
  set(value) { emits("update:modelValue", value) },
});
@click="$emit('valider')"
@valider="valider(item)"
//
<input v-model="value" />


  <transition name="slide-right">
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

  <add :layouts="layouts" :entries="entries"></add>
</template>

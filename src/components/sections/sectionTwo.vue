<script setup>
const props = defineProps(["item", "editable"]);
const layout = 'two'
</script>

<template>
  <section v-if="item.layout === layout" :id="item.id" :class="{ 'editable': editable }, 'py-2'"
    data-fields="title=txt&amp;body=rte&amp;image=img&amp;youtube_url=vid">
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

        <div class="col-md-6">
          <template v-if="item.image">
            <img :src="item.image" />
            <h3>{{ item.title2 }}</h3>
          </template>
          <template v-else>
            <img src="@/assets/images/placeholder.webp" />
            <h3>{{ item.title2 }}</h3>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

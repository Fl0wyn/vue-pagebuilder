<script setup>
const props = defineProps(["title"])
</script>

<template>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" :id="'offcanvasEnd-'+title">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title">{{ title }}</h2>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>
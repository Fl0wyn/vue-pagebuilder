<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["mykey"]);
const emits = defineEmits(["image"]);

const choose = () => document.getElementById("fileInput").click();

onMounted(() => {
  document.getElementById("fileInput").addEventListener("change", function (e) {
    var img_width = 500;

    var img = new Image();
    img.onload = function () {
      var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        oc = document.createElement("canvas"),
        octx = oc.getContext("2d");

      canvas.width = img_width; // destination canvas size
      canvas.height = (canvas.width * img.height) / img.width;

      var cur = {
        width: Math.floor(img.width * 0.5),
        height: Math.floor(img.height * 0.5),
      };
      oc.width = cur.width;
      oc.height = cur.height;
      octx.drawImage(img, 0, 0, cur.width, cur.height);
      while (cur.width * 0.5 > img_width) {
        cur = {
          width: Math.floor(cur.width * 0.5),
          height: Math.floor(cur.height * 0.5),
        };
        octx.drawImage(
          oc,
          0,
          0,
          cur.width * 2,
          cur.height * 2,
          0,
          0,
          cur.width,
          cur.height
        );
      }
      ctx.drawImage(
        oc,
        0,
        0,
        cur.width,
        cur.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
      var base64Image = canvas.toDataURL("image/jpeg");

      app.$emit("image", {
        key: app.mykey,
        value: base64Image,
      });
    };
    img.src = URL.createObjectURL(e.target.files[0]);
  });
});
</script>

<template>
  <input type="file" id="fileInput" class="fileInput" accept="image/png, image/jpeg, image/gif" style="display: none" />
  <button class="btn btn-outline-secondary" @click="choose">Upload 1</button>

  <input type="file" id="fileInput2" class="fileInput" accept="image/png, image/jpeg, image/gif" style="display: none" />
  <button class="btn btn-outline-secondary" @click="choose">Upload 2</button>
</template>

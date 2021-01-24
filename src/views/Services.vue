<template>
  <div class="services">
    <vedio></vedio>
    <search></search>
    <forms></forms>
    <get></get>
    <contact></contact>
  </div>
</template>
<script>
import vedio from "@/components/vedio.vue";
import search from "@/components/search.vue";
import forms from "@/components/forms.vue";
import get from "@/components/get.vue";
import contact from "@/components/contact.vue";
export default {
  name: "Services",
  components: {
    vedio,
    search,
    forms,
    get,
    contact,
  },
};
</script>

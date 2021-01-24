<template>
  <div class="home">
    <Header></Header>
    <about></about>
    <vedio></vedio>
    <search></search>
    <forms></forms>
    <get></get>
    <contact></contact>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import about from "@/components/about.vue";
import vedio from "@/components/vedio.vue";
import search from "@/components/search.vue";
import forms from "@/components/forms.vue";
import get from "@/components/get.vue";
import contact from "@/components/contact.vue";
export default {
  name: "Home",
  components: {
   Header,
   about,
   vedio,
   search,
   forms,
   get,
   contact,
  }
};
</script>

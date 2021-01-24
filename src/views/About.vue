<template>
  <div class="about">
    <about></about>
    <contact></contact>
  </div>
</template>
<script>
import about from "@/components/about.vue";
import contact from "@/components/contact.vue";
export default {
  name:'About',
  components:{
    about,
    contact
  },  
}
</script>

<template>
  <div class="section">
    <div class="p-2" style="margin-top: 40px;">
      <carousel
        :items="1"
        :autoplay="true"
        :center="true"
        :nav="false"
        :loop="true"
        :autoplaytimeout="1000"
        :margin="5"
      >
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Slide1 from "@/components/slide-1";
import Slide2 from "@/components/slide-2";
import Slide3 from "@/components/slide-3";
export default {
  name: "Pic",
  components: {
    carousel,
    Slide1,
    Slide2,
    Slide3,
  },
};
</script>

<style scoped>
carousel {
  border-radius: 30px;
}
.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top:1px;
}

</style>

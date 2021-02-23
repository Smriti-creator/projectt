<template>
  <div class="container pb-6">
    <h1 class="font-black p-6">POPULAR CATEGORIES</h1>
    <div class="tile is-ancestor is-mobile text-center">
      <div class="tile is-3 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="subtitle pt-3">Market</p>
        </div>
        <div class="tile is-child box">
          <p class="subtitle pt-3">IT</p>
        </div>
      </div>
      <div class="tile is-3 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="subtitle">Hospitality and tourism</p>
        </div>
        <div class="tile is-child box">
          <p class="subtitle">Architecture and construction</p>
        </div>
      </div>
      <div class="tile is-3 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="subtitle pt-3">Finance</p>
        </div>
        <div class="tile is-child box">
          <p class="subtitle">Education and Training</p>
        </div>
      </div>
      <div class="tile is-3 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="subtitle">Science and Technology</p>
        </div>
        <div class="tile is-child box">
          <p class="subtitle pt-3">Health Science</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tiles",
};
</script>

<style scoped>
.is-parent {
  padding: 40px 40px;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-right: 20px;
  margin-bottom: 1.5rem !important;
  padding: 20px;
  border-radius: 20px;
}

.tile.is-child {
  margin-right: 20px;
  margin-top: 1.5rem !important;
  padding: 20px;
  border-radius: 20px;
}
.box {
  width: 200px;
  height: 150px;
}
</style>

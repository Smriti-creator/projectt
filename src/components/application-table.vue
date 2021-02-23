<template>
  <div class="w-full grid grid-cols-3 text-center px-12 py-4 font-bold">
    <div>{{ name }}</div>
    <div>{{ id }}</div>
    <div>{{ position }}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "id", "position"],
};
</script>
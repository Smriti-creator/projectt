<template>
  <div class="section">
    <div class="container wrap">
      <div class="search p-2 bg-white">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
          v-model="search"
        />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  height: 100%;
  padding: 50px 50px;
}
.search {
  display: flex;
  border: gray;
  box-shadow: 10px 10px 20px #ced4da;
  border-radius: 40px;
}

.searchTerm {
  width: 100%;
  height: 50px;
  padding: 5px;
  border-radius: 30px;
}

.searchTerm:focus {
  color: black;
}

.searchButton {
  width: 50px;
  height: 50px;
  border: 1px solid hsl(217, 71%, 53%);
  background: hsl(217, 71%, 53%);
  text-align: center;
  color: #fff;
  border-radius: 25px 25px 25px 25px;
  cursor: pointer;
  font-size: 20px;
}

.wrap {
  width: 65%;
  text-align: center;
}
</style>

<template>
  <div class="home">
    <img alt="Emil image" src="../assets/emil.jpg" id="emilImg" />
    <h1>Min ønskeliste 2020 ❄️ Emil Berg Steffensen</h1>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { PostList }
};
</script>

<style>
#emilImg {
  max-width: 20%;
  border-radius: 100%;
}
</style>

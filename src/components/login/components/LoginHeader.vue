<template>
  <div class="allcontent">
    <img src="../../../assets/img/indexlogo.jpg" alt>
  </div>
</template>

<script>
export default {
  mounted() {
    _.first = function() {
      console.log("hello world");
    };
  }
};
</script>

<style scoped>
.allcontent {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.allcontent img {
  display: block;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  margin-top: 0.1rem;
  border-radius: 50%;
}
</style>



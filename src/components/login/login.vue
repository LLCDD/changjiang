<template>
  <div class="div">
    <lg-header></lg-header>
    <!-- <img class="img" src="../../assets/img/logo.png" alt> -->
    <lc-conent></lc-conent>
  </div>
</template>

<script>
import LgHeader from "./components/LoginHeader";
import LcConent from "./components/LoginContent";
export default {
  components: {
    LgHeader,
    LcConent
  },
  created() {
    this.$store.state.headerStatus = false;
  },
  mounted(){
    
  }
};
</script>

<style scoped>
.div {
  background: url('../../assets/b.png') no-repeat ;
  background-size: 100% 100%;
  margin: 0 auto;
  min-height: 100%;
  padding-top: 1.7rem;
  overflow-y: auto;
  width: 100%
}
</style>
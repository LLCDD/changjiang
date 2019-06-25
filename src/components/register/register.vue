<template>
  <div class="all">
    <rs-header></rs-header>
    <rs-content></rs-content>
  </div>
</template>

<script>
import RsHeader from "./components/RsHeader";
import RsContent from "./components/RsContent";
export default {
  components: {
    RsHeader,
    RsContent
  },
  created: function() {
    this.$store.state.headerStatus = false;
  }
};
</script>

<style  scoped>
</style>
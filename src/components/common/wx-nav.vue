<template>
  <div id="wx-nav">
    <nav id="nav">
      <router-link to="/index">
        <img src="../../assets/img/homepage-h.png" alt>
        <img src="../../assets/img/homepage.png" alt>
        <span>首页</span>
      </router-link>

      <router-link to="/money">
        <img src="../../assets/img/coupons-h.png" alt>
        <img src="../../assets/img/coupons.png" alt>
        <span>钱包</span>
      </router-link>
      <router-link to="/task">
        <img src="../../assets/img/document-h.png" alt>
        <img src="../../assets/img/document.png" alt>
        <span>记录</span>
      </router-link>
      <router-link to="/personal">
        <img src="../../assets/img/people-h.png" alt>
        <img src="../../assets/img/people.png" alt>
        <span>个人</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
@import "../../assets/css/wx-nav.css";
#wx-nav {
  width: 100%;
  height: 1rem;
}
</style>

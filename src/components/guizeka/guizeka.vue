<template>
  <!-- 钉钉 考勤打卡 -->
  <!-- DropdownMenu   多选的下拉事件 -->
  <div class="dingding">
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../assets/img/left0.png" alt>
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 打卡的个人信息简单信息 -->
    <div class="toux">
      <!-- 显示头像 -->
      <p>
        <img src="../../assets/img/xiuday.png" alt>
      </p>
      <!-- 显示姓名和考勤日期 -->
      <div>
        <p>{{ name }}</p>
        <p>
          <!-- <span>考勤组：考勤 (查看规则)</span> -->
          <span >考勤组：考勤 </span>
          <span>{{ time }}</span>
        </p>
      </div>
    </div>
    <section class="section">
        <h3>考勤时间:</h3>
        <p>周一到周五上班, 上班时间：9:00 ~ 18:00</p>
        <p>休息时间11:30 ~ 13:00</p>
        <p>周六周日休息</p>
        <h3>可打卡时段：</h3>
        <p>迟到15分钟以内不记迟到</p>
        <p>迟到45分钟及以上为严重迟到</p>
        <p>迟到90分钟及以上为旷工</p>
        <h3>迟到与早退:</h3>
        <p>迟到15分钟以内不记迟到</p>
        <p>迟到45分钟及以上为严重迟到</p>
        <p>迟到90分钟及以上为旷工</p>
    </section>



    <!-- 底部 -->
    <footer>
      <p>
        <img src="../../assets/img/daka_s.png" alt>
        <span>打卡</span>
      </p>
      <p @click="tongji">
        <!-- 差一张图片 -->
        <img src="../../assets/img/tongji.png" alt>
        <span>统计</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "考勤规则",
      name: "llc",
      time: "2019.04.20",

    };
  },
  mounted() {},
  methods: {
    //   返回的事件
    fanhui() {
      this.$router.go(-1);
    },
    tongji(){
        this.$router.replace({name:"dingtongji"})
    }
  }
};
</script>

<style scoped>
.dingding {
  height: 100%;
  width: 100%;
  background: #fff;
}
header {
  height: 1.3rem;
  background: #fff;
  width: 100%;
}
header > p {
  height: 0.4rem;
  width: 100%;
}
header > div {
  height: 0.88rem;
  width: 100%;
  line-height: 0.88rem;
  text-align: center;
  position: relative;
}
header > div > p > img {
  height: 0.8rem;
  width: 0.65rem;
  position: absolute;
  left: 0;
}
.toux {
  height: 1rem;
  width: 100%;
  padding: 0 0.3rem;
  background: #fff;
  padding-top: 0.14rem;
  border-bottom: 1px solid #dddddd;
}
.toux > p {
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  background: #dddddd;
  float: left;
}
.toux > p > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.toux > div {
  float: left;
  margin-left: 0.4rem;
  height: 100%;
  width: 80%;
}
.toux > div > :first-child {
  font-size: 0.34rem;
  font-weight: 500;
}
.toux > div > :last-child {
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
  color: #f2c133;
  font-size: 0.22rem;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
}
footer > p {
  text-align: center;
}
footer > p > img {
  height: 0.6rem;
}
footer > p > span {
  display: block;
  font-size: 0.22rem;
}
.section {
  padding: 0 0.3rem;
}
.section > h3 {
    padding: 0.2rem 0;
    font-size: 0.3rem;
    font-weight: 550
}
.section > p {
    margin-bottom: 0.15rem
}
</style>

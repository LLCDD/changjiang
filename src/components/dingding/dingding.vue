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
           <span @click="kaoqin">考勤组：考勤 (查看规则)</span>
          <span>{{ time }}</span>
        </p>
      </div>
    </div>
    <!-- 打卡的状态判断 -->
    <!-- 可打卡 -->
    <!-- 正常的上下班的打卡事件 daok -->
    <div class="section" v-if="show == 0" @click="daok">
      <p>
        <span></span>
        <span>上班时间: {{ shang }}</span>
      </p>
      <p>
        <span></span>
        <span>上班时间: {{ xia }}</span>
      </p>
      <div class="last">
        <p>上班时间</p>
        <p>{{ shang }}</p>
      </div>
    </div>
    <!-- 山上打卡成功的界面 -->
    <van-popup v-model="showf" class="shangbanok">
      <div class="shangbanok_n">
        <p></p>
        <div>
          <p>{{ time }}</p>
          <p>上班打卡成功</p>
        </div>
        <p @click="start">开始工作</p>
      </div>
    </van-popup>
    <!-- 下班打卡成功的页面 -->
    <van-popup v-model="showf1" class="shangbanok">
      <div class="shangbanok_n">
        <p></p>
        <div>
          <p>{{ time }}</p>
          <p>下班打卡成功</p>
        </div>
        <p @click="start1">我知道了</p>
      </div>
    </van-popup>
    <!-- 不可打卡 -->
    <!-- 提前的下班事件  dawu-->
    <div class="section" v-if="show == 1" @click="dawu">
      <p>
        <span></span>
        <span>上班时间: {{ shang }}</span>
      </p>
      <p>
        <span></span>
        <span>上班时间: {{ xia }}</span>
      </p>
      <div class="last1">
        <p style="font-size:0.28rem">现在不可打卡</p>
        <p>{{ shang }}</p>
      </div>
    </div>

    <!-- 下班异常的打卡样式 -->
    <van-popup v-model="showy">
      <div class="yichangka">
        <!-- 异常打卡的取消事件 -->
        <img @click="yichangcolse" src="../../assets/img/close.png" alt="">
        <h3> 15:20 </h3>
        <p> 还没到下班时间 </p>
        <p>你确定要打卡吗?</p>
        <p @click="yihchangko">确定打卡</p>
      </div>
    </van-popup>

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
      msg: "考勤打卡",
      name: "llc",
      time: "2019.04.20",
      shang: "8:30",
      xia: "17:30",
      //   打卡状态的判断
      show: 1,
      //   判断是上班还是下班
      shangban: 0,
      showf: false,
      showf1: false,
      // 下班异常的样式 是否出现
      showy:false
    };
  },
  mounted() {
    this.http.get('/api/sign').then(res =>{
      console.log(res)
      this.shang = res.data.sign_in_date
      this.xia = res.data.sign_out_date
    })
  },
  methods: {
    //   返回的事件
    fanhui() {
      this.$router.go(-1);
    },
    //   正常的上班事件
    daok() {
      if (this.shangban == 1) {
        console.log("上班时间");
        this.showf = true
      } else {
          this.showf1 = true
        console.log("下班时间");
      }
    },
    // 上班打卡成功
    start() {
      this.showf = false;
    },
    // 下班打卡成功
    start1(){
        this.showf1 = false
    },
    // 打卡异常的事件
    dawu() {
      this.showy = true
    },
    // 异常打卡的取消事件
    yichangcolse(){
      this.showy = false;
    },
    // 异常打卡的确定事件
    yihchangko(){
      this.showy = false;
      // 下面是 异常打卡的逻辑处理
      // 。。。。。。。
    },
    // 去统计的页面
    tongji(){
      this.$router.replace({name:'dingtongji'})
    },
    // 考勤规则的详情
    kaoqin(){
      this.$router.push('/guizeka')
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
.section > p {
  margin-top: 0.46rem;
  font-size: 0.22rem;
  color: #666666;
}
.section > p > :first-child {
  display: inline-block;
  height: 0.16rem;
  width: 0.16rem;
  border-radius: 50%;
  background: #f2c133;
}
.section > p > :last-child {
  margin-left: 0.3rem;
}
.last {
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 50%;
  background: #f7c842;
  margin: 0 auto;
  text-align: center;
  font-size: 0.34rem;
  font-weight: 500;
  padding-top: 0.9rem;
  color: #fff;
}
.last > :first-child {
  margin-bottom: 0.2rem;
}
.last1 {
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 50%;
  background: #a3a3a3;
  margin: 0 auto;
  text-align: center;
  font-size: 0.34rem;
  font-weight: 500;
  padding-top: 0.9rem;
  color: #fff;
}
.last1 > :first-child {
  margin-bottom: 0.2rem;
}
.shangbanok {
  width: 80%;
  height: 7rem;
}
.shangbanok_n {
  height: 100%;
  width: 100%;
}
.shangbanok_n > :first-child {
  height: 4rem;
  width: 100%;
  background: #cccccc;
}
.shangbanok_n > div {
  height: 2.1rem;
  width: 100%;
  background: #fff;
  color: #eab617;
  text-align: center;
  padding-top: 0.4rem;
}
.shangbanok_n > div > :first-child {
  font-size: 0.5rem;
  font-weight: 550;
  margin-bottom: 0.36rem;
}
.shangbanok_n > div > :last-child {
  font-size: 0.34rem;
}
.shangbanok_n > :last-child {
  height: 0.9rem;
  width: 100%;
  background: #eab617;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.34rem;
  color: #fff;
}
.yichangka {
  width: 5.6rem;
  height: 4.6rem;
  background: #ffffff;
  text-align: center;
  position: relative
}
.yichangka > h3 {
  font-size: 0.54rem;
  font-weight: 600;
  padding-top: 1.16rem;
}
.yichangka > p {
  margin-top: 0.3rem;
  font-size: 0.32rem; 
}
.yichangka > :last-child {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #eab617;
  color: #fff;
  height: 0.9rem;
  line-height: 0.9rem
}
.yichangka > img {
  position: absolute;
  height: 0.8rem;
  width: 0.8rem;
  right: 0.3rem;
  top: 0.3rem;
}
</style>

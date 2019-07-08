<template>
  <!-- 每个岗位混合一个页面 -->
  <!-- Themanagerpost -->
  <div class="index">
    <!-- 每个页面一个头部 因为他的头部是被顶的 -->
    <header>
      <p></p>
      <div>
        <p>
          <img @click="cela" src="../../assets/img/set.png" alt>
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <!-- 头部结束 因为页面东西不是太多 所以不用定位 防止最后出现问题 -->

    <!-- 中间的内容开始 -->
    <div class="center">
      <!-- 打卡和工作通知的跳转的标题 -->
      <p class="p">个人工作管理</p>
      <!-- 功能选项开始 -->
      <div class="guanli" v-if="bool">
        <div>
          <p @click="dingding">
            <img src="../../assets/img/ding.png" alt>
          </p>
          <span>考勤打卡</span>
        </div>
        <div @click="Workorder">
          <p>
            <img src="../../assets/img/work.png" alt>
          </p>
          <span>工作通知</span>
        </div>
      </div>
      <!-- 便利岗 -->
      <div class="guanli" v-if="!bool" style="margin-bottom:20px" >
        <div @click="pin">
          <p>
            <img src="../../assets/img/guanli.png" alt>
          </p>
          <span>商品管理</span>
        </div>
        <div @click="tongzhidian">
          <p>
            <img src="../../assets/img/tongzhi.png" alt>
          </p>
          <span>订单通知</span>
        </div>
      </div>
      <!-- 个人管理结束 -->
      <!-- 工作日志开始 -->
      <p class="p" v-if="bool">工作日志</p>

      <!-- 经理岗 -->
      <div v-if="biaoshi == 'manager'">
        <div class="weixiu" @click="kefugang">
          <p>
            <img src="../../assets/img/kefu.png" alt>
          </p>
          <span>客服岗</span>
        </div>
        <div class="weixiu" @click="louguangang">
          <p>
            <img src="../../assets/img/louguan.png" alt>
          </p>
          <span>楼管岗</span>
        </div>
        <div class="weixiu" @click="gongchenggang">
          <p>
            <img src="../../assets/img/gongcheng.png" alt>
          </p>
          <span>工程岗</span>
        </div>
      </div>

      <!-- 工程岗 -->
      <div v-if="biaoshi == 'engineer'">
        <div class="weixiu" @click="xuirizhi">
          <p>
            <img src="../../assets/img/xiuday.png" alt>
          </p>
          <span>维修日志</span>
        </div>
      </div>

      <!-- 客服岗 -->
      <div v-if="biaoshi == 'kefu'">
        <div class="weixiu" @click="huifang">
          <p>
            <img src="../../assets/img/hunfang.png" alt>
          </p>
          <span>回访日志</span>
        </div>
        <div class="weixiu" @click="yezhuxiu">
          <p>
            <img src="../../assets/img/yezhu.png" alt>
          </p>
          <span>业主保修</span>
        </div>
        <div class="weixiu" @click="laifang">
          <p>
            <img src="../../assets/img/laifang.png" alt>
          </p>
          <span>来访日志</span>
        </div>
        <div class="weixiu" @click="stopmoney">
          <p>
            <img src="../../assets/img/tingche.png" alt>
          </p>
          <span>停车费</span>
        </div>
        <div class="weixiu" @click="guangao">
          <p>
            <img src="../../assets/img/guanggao.png" alt>
          </p>
          <span>广告费</span>
        </div>
        <div class="weixiu" @click="zhufu">
          <p>
            <img src="../../assets/img/zhufu.png" alt>
          </p>
          <span>祝福提醒</span>
        </div>
      </div>

      <!-- 楼管岗 -->
      <div v-if="biaoshi == 'security'">
        <div class="weixiu" @click="baojie">
          <p>
            <img src="../../assets/img/baojie.png" alt>
          </p>
          <span>保洁考勤</span>
        </div>
        <div class="weixiu" @click="xiaofang">
          <p>
            <img src="../../assets/img/xiaofang.png" alt>
          </p>
          <span>消防巡查</span>
        </div>
        <div class="weixiu" @click="gongshui">
          <p>
            <img src="../../assets/img/gongshui.png" alt>
          </p>
          <span>供水巡查</span>
        </div>
        <div class="weixiu" @click="dianti">
          <p>
            <img src="../../assets/img/dianti.png" alt>
          </p>
          <span>电梯巡查</span>
        </div>
        <div class="weixiu" @click="guangwang">
          <p>
            <img src="../../assets/img/guangwang.png" alt>
          </p>
          <span>网管巡查</span>
        </div>
        <div class="weixiu" @click="weisheng">
          <p>
            <img src="../../assets/img/lvhua.png" alt>
          </p>
          <span>卫生绿化</span>
        </div>
        <div class="weixiu" @click="zhuangxiu">
          <p>
            <img src="../../assets/img/weijian.png" alt>
          </p>
          <span>装修违建</span>
        </div>
        <div class="weixiu" @click="qita">
          <p>
            <img src="../../assets/img/other.png" alt>
          </p>
          <span>其他设施</span>
        </div>
      </div>
    </div>
    <!-- 左侧弹出的用户列表 -->
    <mt-popup v-model="popupVisible" position="left">
      <div class="left">
        <div class="top">
          <p>
            <img style="height:1.5rem;width:1.5rem;border-radius: 50%;" :src="avatar" alt="">
          </p>
          <p>{{ name }}</p>
        </div>
        <div class="section">
          <!-- 跳转个人信息页面 -->
          <p @click="information">
            <img src="../../assets/img/geren.png" alt>
            <span>个人信息</span>
          </p>
          <p @click="MoreSettings">
            <img src="../../assets/img/shezhi.png" alt>
            <span>更多设置</span>
          </p>
          <p @click="tui">
            <img src="../../assets/img/tuichu.png" alt>
            <span>退出登录</span>
          </p>
        </div>
      </div>
    </mt-popup>
    <!-- 退出得窗 -->
    <mt-popup v-model="popupVisible1" position="bottom">
      <div class="tui">
        <p
          style="font-size:0.26rem;color:#999999;height:0.86rem;line-height:0.86rem"
        >退出后，你将不再收到来自长江管家的消息</p>
        <p style="color:#f0cb72" @click="tuiok">确认</p>
        <p @click="colse">取消</p>
      </div>
    </mt-popup>
    <!-- <input style="border:1px solid #ccc" type="text" value="" v-model="biaoshi"> -->
  </div>
</template>

<script>
import { Popup } from "mint-ui";

export default {
  data() {
    return {
      msg: "经理岗",
      //   通过改变一个变量来改变工作岗位
      biaoshi: localStorage.getItem('role'),
      bool: true,
      // 控制侧边栏的显示和隐藏
      popupVisible: false,
      // 底部的退出
      popupVisible1: false,
      // 用户的头像
      avatar:"",
      // 用户的名称
      name:""
    };
  },
  mounted() {
    // 通过后台返回的值来判断要显示的用户权限
    if (this.biaoshi == 'manager') {
      this.bool = true;
      this.msg = "经理岗";
    } else if (this.biaoshi == 'engineer') {
       this.bool = true;
      this.msg = "工程岗";
    } else if (this.biaoshi == 'kefu') {
      this.msg = "客服岗";
       this.bool = true;
    } else if (this.biaoshi == 'security') {
      this.msg = "楼管岗";
       this.bool = true;
    } else if (this.biaoshi == 'salesclerk') {
      this.bool = false;
      this.msg = "便利岗";
    }
    this.http.get('/api/me').then(res =>{
      console.log(res)
      localStorage.setItem('username',res.data.me.name)
      if(res.data.me.avatar){
        this.avatar = res.data.me.avatar
      }else {
        this.avatar = res.data.me.avatar_format
        this.name = res.data.me.name
      }
    }).catch(res => {
      this.$toasted.error(res.message).goAway(1000)
    })
  },
  methods: {
    // methods 里面是自己的自定义的事件
    // 1.侧拉的显示
    cela() {
      this.popupVisible = true;
    },
    // 2.去个人信息  information
    information() {
      this.$router.push("/information");
    },
    // 3:去更过设置 MoreSettings
    MoreSettings() {
      this.$router.push("/MoreSettings");
    },
    // 侧边的退出
    tui() {
      this.popupVisible = false;
      this.popupVisible1 = true;
    },
    // 4 退出的取消按钮  colse
    colse() {
      this.popupVisible1 = false;
    },
    // 5.确定的退出 清除数据
    tuiok() {
      localStorage.clear();
      this.$router.replace({ name: "login" });
    },
    // 考勤打卡
    dingding() {
      this.$router.push("/dingding");
    },
    // 通过判断biaoshi的变化来  判断工程岗位跳转的路径
    Workorder() {
      if (this.biaoshi == 'engineer') {
        // 工程岗的工作通知
        this.$router.push("/workorder");
      } else if (this.biaoshi == 'kefu') {
            // 客服岗的工作通知
        this.$router.push("/worktong");
      } else if(this.biaoshi == 'security'){
        // 楼管岗的工作通知
        this.$router.push('/workzhi')
      }else if(this.biaoshi == 'manager'){
        // 经理岗的工作通知
        this.$router.push('/jinglitongzhi')
      }
    },
    // 工程岗的维修日志
    xuirizhi() {
      this.$router.push("/gweixiu");
    },
    // ----------------------------------------客服岗的逻辑开始
    // 客服岗的停车费
    stopmoney() {
      this.$router.push("/stopmoney");
    },
    // 客服岗的业主报修
    yezhuxiu() {
      this.$router.push("/yezhuxiu");
    },
    // 客服岗的祝福提醒
    zhufu() {
      this.$router.push("/zhufu");
    },
    // 客服岗的来访日志
    laifang() {
      this.$router.push("/laifang");
    },
    // 客服岗的广告费
    guangao() {
      this.$router.push("/guangao");
    },
    // 客服岗的回访日志
    huifang(){
      this.$router.push('/huifang')
    },
    // ----------------------------楼管岗开始
    // 楼管岗的保洁考勤
    baojie(){
      this.$router.push('/baojie')
    },
    // 楼管岗的消防巡查
    xiaofang(){
      this.$router.push('/xiaofang')
    },
    // 楼管岗的供水巡查
    gongshui(){
      this.$router.push('/gongshui')
    },
    // 楼管岗的电梯巡查
    dianti(){
      this.$router.push('/dianti')
    },
    // 楼管岗的官网巡查
    guangwang(){
      this.$router.push('/guangwang')
    },
    // 楼管岗的卫生绿化
    weisheng(){
      this.$router.push('/weisheng')
    },
    // 楼管岗的装修违建
    zhuangxiu(){
      this.$router.push('/zhuangxiu')
    },
    // 楼管岗的其他设施
    qita(){
      this.$router.push('/qita')
    },
    // 经理岗的开始
    // 1.经理岗的客服岗
    kefugang(){
      this.$router.push('/managerkefu')
    },
    // 2.经理岗的楼管岗
    louguangang(){
      this.$router.push('/managerlouguan')
    },
    // 3.工程岗的日志
    gongchenggang(){
      this.$router.push('/managergongcheng')
    },
    // 4.便利岗的开始
    // 4.1 便利岗的订单通知
    tongzhidian(){
      this.$router.push('/dingdantong')
    },
    // 便利岗的商品管理
    pin(){
      this.$router.push('/guanshang')
    }
  }
};
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
.index >>> .mint-popup-left {
  height: 100%;
  width: 80%;
  background: #ffffff;
}
.index >>> .mint-popup-bottom {
  width: 100%;
  height: 3rem;
  background: #818181;
}
header {
  height: 1.3rem;
  width: 100%;
  background: #eab617;
}
header > p {
  height: 0.4rem;
}
header > div {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.88rem;
  padding: 0 0.3rem;
}
header > div > p > img {
  height: 0.8rem;
  width: 0.8rem;
  margin-left: -0.2rem;
}
.center {
  width: 100%;
  height: 6rem;
}
.center > p {
  height: 1rem;
  width: 100%;
  text-align: left;
  font-size: 0.34rem;
  font-weight: 500;
  line-height: 1rem;
  padding: 0 0.3rem;
}
.guanli {
  height: 2.6rem;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
}
.guanli > div {
  height: 100%;
  width: 1.8rem;
  margin-left: 0.44rem;
  float: left;
}
.guanli > div > p {
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  /* background: orange */
}
.guanli > div > p > img {
  height: 100%;
  width: 100%;
}
.guanli > div > span {
  display: inline-block;
  font-size: 0.26rem;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.weixiu {
  width: 1.2rem;
  height: 2rem;
  margin-left: 7%;
  float: left;
}
.weixiu > p {
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 0.3rem;
  background: orange;
}
.weixiu > p > img {
  height: 100%;
  width: 100%;
}
.weixiu > span {
  display: inline-block;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.left > .top {
  height: 3.1rem;
  padding: 0 0.32rem;
  /* background: yellow; */
  line-height: 3.6rem;
  width: 90%;
  border-bottom: 1px solid #ccc;
  margin-left: 5%;
  overflow: hidden;
}
.left > .top > :first-child {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  /* background: pink; */
  /* margin-top: 1rem; */
}
.left > .top > :last-child {
  margin-left: 0.3rem;
  font-size: 0.34rem;
  font-weight: 550;
}
.left > .top > p {
  float: left;
  padding-left: 0.3rem;
}
.section {
  padding: 0 0.3rem;
}
.section > p > img {
  height: 0.34rem;
  width: 0.34rem;
}
.section > p {
  margin-top: 0.56rem;
}
.section > p > span {
  display: inline-block;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}
.tui {
  width: 100%;
  height: 3rem;
  position: relative;
}
.tui > p {
  background: #fff;
  height: 1rem;
  text-align: center;
  font-size: 0.3rem;
  line-height: 1rem;
}
.tui > :last-child {
  margin-top: 0.15rem;
}
</style>

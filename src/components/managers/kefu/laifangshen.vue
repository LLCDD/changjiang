<template>
  <div class="workorder">
    <!-- 经理岗的里的客服岗的回访日志的审批 -->
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../../assets/img/left0.png" alt />
        </p>
        {{msg}}
      </div>
    </header>
    
    <section class="section">
      <div>
        <p>登记员工：丽丽</p>
        <div v-for="(index) in 1" :key="index">
          <p>访客姓名：{{ user.visitor_name }}</p>
          <p>访客电话：{{ user.visitor_tel }}</p>
          <p>被访业主：{{ user.xiaoqu.xiaoqu_name }}</p>
          <p>备注：{{ user.remark }}</p>
          <p>
            <strong>图片：</strong>
            <span v-for="(item,index) in user.images_format" :key="index">
              <img style="width:100%;height:100%" :src="item" alt="">
            </span>
          </p>
        </div>
      </div>
      <!-- <div class="tet">
        <p>处理意见：</p>
        <textarea :value="value" cols="30" rows="10" placeholder="请输入您的处理意见"></textarea>
      </div> -->
      <!-- <div>
        <p>回访人员：丽丽</p>
        <div v-for="(index) in 1" :key="index">
          <p>回访业主：{{ user.xiaoqu.xiaoqu_name }}</p>
          <p>物业费金额： {{ user.total_money }} 元</p>
          <p>支付方式：{{ user.pay_type }}</p>
          <p>备注：{{ user.remark }}</p>
        </div>
      </div>-->
      <div class="tet">
        <p>处理意见：</p>
        <textarea v-model="value" cols="30" rows="10" placeholder="请输入您的处理意见"></textarea>
      </div> 
    </section>
    <div class="fa" @click="fa" v-if="state == 1">发送</div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
// Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      msg: "审批",
      value: "",
      user:{},
      state:1
    };
  },
  mounted() {
    this.http.get("/api/notices/" + this.$route.params.id).then(res => {
      console.log(res);
      this.user = res.data.detail
      this.value = res.data.push.handle_result
      console.log(res.data.push.type_format)
      if(res.data.push.handle_result == null){
        this.state = 1
      }else {
        this.state = 0
      }
    });
  },
  methods: {
    // 提交处理意见
    fa(){
      this.http.post('/api/notices/'+ this.$route.params.id,{handle:1,handle_result:this.value}).then(res =>{
        console.log(res)
      }).catch(res =>{
        this.$toasted.error(res.message).goAway(1000)
      })
    },
    fanhui() {
      this.$router.go(-1);
    },
    // 页面的统计
    tongji() {
      console.log("23434");
    },
    // 消息的审批
    shenpi() {
      console.log("34");
    }
  },
  watch: {
    value2(a, b) {
      console.log(a, b);
      if (a == "a") {
        console.log("全部消息");
      } else if (a == "b") {
        console.log("未审批");
      } else if (a == "c") {
        console.log("已审批");
      }
    }
  }
};
</script>

<style scoped>
.workorder {
  height: 100%;
  width: 100%;
  /* background: red; */
  overflow: hidden;
}
.workorder >>> .down::after {
  display: none;
}
.workorder >>> .van-dropdown-menu {
  position: fixed;
  width: 100%;
  top: 1.3rem;
}
.workorder >>> .van-icon-success {
  color: #eab617 !important;
}
header {
  height: 1.3rem;
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
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
  font-size: 0.3rem;
}
header > div > p > img {
  height: 0.8rem;
  width: 0.65rem;
  position: absolute;
  left: 0;
}
.section {
  min-height: 100%;
  width: 100%;
  background: #eeeeee;
  padding-top: 1.3rem;
  overflow: hidden;
}
.section > div {
  background: #fff;
  margin-top: 0.1rem;
  width: 100%;
}
.section > div > div {
  padding: 0 0.3rem;
  padding-bottom: 0.2rem;
}
.section > div > div > p {
  margin-bottom: 0.04rem;
}
.section > div > div > p > strong {
    float: left
}
.section > div > div > p > span {
    display: inline-block;
    height: 0.6rem;
    width: 0.6rem;
    background: red;
    margin-right: 0.1rem
}
.section > div > :first-child {
  font-size: 0.34rem;
  font-weight: 500;
  padding: 0.3rem;
}
.section > div > p {
  padding: 0 0.3rem;
}
.section {
  height: 90%;
  overflow: auto;
}
.section > .tet {
  margin-top: 0.2rem;
  height: 2rem;
}
.section > .tet > textarea {
  height: 1rem;
  margin-left: 0.3rem;
  width: 80%;
}
.fa {
  height: 1rem;
  width: 100%;
  background: #eab617;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 1rem;
  font-size: 0.34rem;
  color: #fff;
}
</style>



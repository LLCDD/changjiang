<template>
  <!-- 客服岗的业主报修 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../assets/img/left0.png" alt />
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <div class="senter">
      <p>
        <span>回访业主：</span>
        <input @click="yehzu" v-model="yezhu_name" type="text" placeholder="请输入业主信息" />
      </p>
      <p>
        <span>物业费金额：</span>
        <input v-model="total_money" type="text" placeholder="请输入物业费金额" />
      </p>
      <div @click="py">
        <p>支付方式</p>
        <p>
          <span>{{ msg1 }}</span>
          <img src="../../assets/img/rightf.png" alt />
        </p>
      </div>
      <p class="last">
        <span>备注：</span>
        <textarea v-model="remark" name placeholder="请输入相关备注" id cols="30" rows="10"></textarea>
      </p>
    </div>
    <div class="clik">+</div>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <van-popup v-model="popupVisible1" position="bottom">
      <div class="tui">
        <p @click="nobao" style="color:#000">不保存</p>
        <p style="color:#f0cb72" @click="tuiok">保存</p>
        <p @click="colse">取消</p>
      </div>
    </van-popup>
    <button @click="tijiao">提交</button>
  </div>
</template>
<script>
import { Picker } from "vant";
import { Popup } from "vant";
import { Uploader } from "vant";
export default {
  data() {
    return {
      msg: "回访日志",
      columns: ["支付宝", "微信", "现金"],
      show: false,
      msg1: "请选择",
      popupVisible1: false,
      // 备注
      remark:"",
      // 业主id
      yezhu_id:this.$store.state.yezhuid.id,
      // 缴费金额
      total_money:"",
      yezhu_name:this.$store.state.yezhuid.yezhu_name,

    };
  },
  methods: {
    // 取筛选业主
    yehzu(){
      this.$router.push('/yezhucha')
    },
    // 返回按钮
    fanhui() {
        this.$router.go(-1);
      // this.popupVisible1 = true;
    },
    // 支付方式的选择
    py() {
      this.show = true;
    },
    onCancel() {
      // 选择认为类型的取消事件
      this.show = false;
    },
    onConfirm(e) {
      // 选择认为类型的确认事件
      console.log(e);
      this.msg1 = e;
      this.show = false;
    },
    // 图片上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 最后离开的保存和不保存
    nobao() {
      this.$router.go(-1);
    },
    // 离开的保存
    tuiok() {
      this.$router.go(-1);
    },
    // 离开的取消
    colse() {
      this.popupVisible1 = false;
    },
    // 最后的 提交
    tijiao() {
      // alert("提交");
      // this.$router.go(-1);
      this.http.post("/api/fee", {
        pay_type: this.msg1,
        total_money: this.total_money,
        remark:this.remark,
        yezhu_id:this.yezhu_id
      }).then(res =>{
        this.$router.go(-1);
        this.$toasted.success(res.message).goAway(1000)
      }).catch(res =>{
        this.$toasted.error(res.message).goAway(1000)
      });
    }
  }
};
</script>
<style scoped>
.MoreSettings {
  height: 100%;
  width: 100%;
  background: #eeeeee;
}
.MoreSettings >>> .van-picker__cancel {
  color: #eab617;
}
.MoreSettings >>> .van-picker__confirm {
  color: #eab617;
}
.MoreSettings >>> .van-switch {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
}
.header {
  height: 1.3rem;
  width: 100%;
  background: #ffffff;
}
.header > p {
  height: 0.42rem;
  width: 100%;
  background: #ffff;
}
.header > div {
  height: 0.88rem;
  width: 100%;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.3rem;
  font-weight: 500;
  position: relative;
}
.header > div > :first-child {
  float: left;
  position: absolute;
}
.fanhui {
  float: left;
  height: 0.8rem;
  width: 0.65rem;
  position: absolute;
  left: 0;
  top: 0.04rem;
}
.senter {
  background: #fff;
  padding: 0 0.3rem;
  margin-top: 0.2rem;
}
.senter > p {
  height: 0.98rem;
  background: #fff;
  line-height: 0.98rem;
  font-size: 0.32rem;
  border-bottom: 1px solid #ddd;
}
.senter > p > input {
  height: 0.6rem;
}
.senter > div {
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
  font-size: 0.3rem;
  border-bottom: 1px solid #dddddd;
}
.senter > div > :first-child {
  color: #000;
}
.senter > div > :last-child {
  color: #999;
}
.senter > div > p > img {
  height: 0.8rem;
  width: 0.6rem;
}
.senter > .last {
  height: 2rem;
  line-height: 1;
  border: 0;
}
.senter > .last > textarea {
  height: 1rem;
  line-height: 1;
  margin-top: 0.6rem;
  width: 4rem;
}
button {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  color: #fff;
  background: #eab617;
}
.updata {
  height: 2.1rem;
  width: 100%;
  padding: 0 0.3rem;
  margin-top: 0.2rem;
  padding-top: 0.26rem;
  background: #fff;
  font-size: 0.3rem;
}
.updata > div {
  margin-top: 0.2rem;
}
.updata > div > p {
  height: 1rem;
  width: 1rem;
  background: url("../../assets/img/updata.png") no-repeat;
  background-size: 100% 100%;
}
.clik {
  height: 1rem;
  width: 3rem;
  margin: 0 auto;
  background: #ccc;
  color: #fff;
  font-size: 0.5rem;
  text-align: center;
  line-height: 1rem;
  margin-top: 0.3rem;
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

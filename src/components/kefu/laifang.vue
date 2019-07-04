<template>
  <!-- 客服岗的来访日志 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../assets/img/left0.png" alt>
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <div class="senter">
      <p>
        <span>访客姓名：</span>
        <input type="text" placeholder="请输入访客姓名">
      </p>
      <p>
        <span>访客电话：</span>
        <input type="text" placeholder="请输入访客电话">
      </p>
      <p>
        <span>被访业主：</span>
        <input type="text" placeholder="请输入业主信息">
      </p>
      <p class="last">
        <span>备注：</span>
        <textarea name placeholder="请输入相关备注" id cols="30" rows="10"></textarea>
      </p>
    </div>
    <div class="updata">
      <p>图片 (至少三张)</p>
      <div>
        <p>
          <van-uploader style="height:1rem;width:1rem;background" :after-read="afterRead"/>
        </p>
      </div>
    </div>
    <button>提交</button>
  </div>
</template>
<script>
import { Uploader } from "vant";
export default {
  data() {
    return {
      msg: "来访日志",
      columns: ["支付宝", "微信"],
      show: false,
      msg1: "请选择"
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
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
.MoreSettings >>> .van-uploader__upload {
  height: 1rem;
  width: 1rem;
  overflow: hidden;
  margin: 0
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
</style>

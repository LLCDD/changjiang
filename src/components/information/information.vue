<template>
  <!-- 个人信息 -->
  <div class="information">
    <!-- 头部 -->
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../assets/img/left0.png" alt />
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 内容区 -->
    <div class="section">
      <!-- 用户的上传头像 -->
      <div>
        <p>头像</p>
        <div>
          <div @click="toux">
            <img :src="imgurl" alt />
            <img class="right" src="../../assets/img/rightf.png" alt />
          </div>
        </div>
      </div>
      <!-- 用户姓名 -->
      <div>
        <span>名字</span>
        <span>{{ user.name }}</span>
      </div>
      <!-- 岗位 -->
      <div>
        <span>您的岗位</span>
        <span>{{ agnwei }}</span>
      </div>
      <!-- 用户的 小区选择 -->
      <div>
        <span>选择小区</span>
        <p>
          {{qu}}
          <img v-if="qu" @click="shan" class="right1" src="../../assets/img/cuo.png" alt />
          <img v-if="!qu" @click="xiqou" class="right" src="../../assets/img/rightf.png" alt />
        </p>
      </div>
      <!-- 性别 -->
      <div>
        <span>性别</span>
        <p>
          {{ bie }}
          <img v-if="bie" @click="shan1" class="right1" src="../../assets/img/cuo.png" alt />
          <img v-if="!bie" @click="xinbk" class="right" src="../../assets/img/rightf.png" alt />
        </p>
      </div>
      <!-- 生日 -->
      <div>
        <span>生日</span>
        <p>
          {{ mode }}
          <img
            v-if="!mode"
            @click="shan2"
            class="right"
            src="../../assets/img/rightf.png"
            alt
          />
          <img v-if="mode" @click="tiemry" class="right1" src="../../assets/img/cuo.png" alt />
        </p>
      </div>
    </div>
    <!-- 头像 -->
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <!-- 小区的选择 -->
    <van-popup v-model="xiaoqus" position="bottom">
      <van-picker show-toolbar :columns="xiaoqu" @cancel="onCancel1" @confirm="onConfirm1" />
    </van-popup>
    <van-popup v-model="xinbie" position="bottom">
      <van-picker show-toolbar :columns="xinb" @cancel="onCancelx" @confirm="onConfirmx" />
    </van-popup>
    <van-popup v-model="timer" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :formatter="formatter"
        :max-date="maxDate"
        @cancel="timerg"
        @confirm="timerok"
      />
    </van-popup>
    <button @click="ok" class="baocun">保存</button>
    <van-popup v-model="popupVisible1" position="bottom">
      <div class="tui">
        <p @click="nobao" style="color:#000">不保存</p>
        <p style="color:#f0cb72" @click="tuiok">保存</p>
        <p @click="colse">取消</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Picker } from "vant";
import { Popup } from "vant";
import { DatetimePicker } from "vant";
import { constants } from "crypto";
export default {
  data() {
    return {
      msg: "个人信息",
      username: "雨天",
      agnwei: "经理岗",
      //   头像的显示
      show: false,
      columns: ["从手机相册选择", "拍照"],
      //   选择小区的显示
      xiaoqus: false,
      xiaoqu: ["音容花园", "绿地滨湖", "浮华心愿", "小区小区", "小区小区"],
      //   选择性别的显示
      xinbie: false,
      xinb: ["男", "女"],
      //   性别的数据判断
      bie: "",
      // 小区的选择
      qu: "",
      // 年月日的选择
      timer: false,
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(),
      currentDate: "",
      mode: "",
      // 头像的路径
      imgurl:
        "http://img1.imgtn.bdimg.com/it/u=1758339456,1627480969&fm=214&gp=0.jpg",
      popupVisible1: false,
      // 用户的个人信息
      user: {},
      xiaoquid: "",
      // 最后发送的小区id
      xqid: ""
    };
  },
  mounted() {
    this.http.get("/api/xiaoqu").then(res => {
      console.log(res.data.area);
      var obj = res.data.area;
      var arr = [];
      var arr1 = [];
      for (var i in obj) {
        // console.log(i, obj[i])
        arr1.push(obj[i]);
        var newobj = { id: i, value: obj[i] };
        arr.push(newobj);
      }
      console.log(arr);
      this.xiaoqu = arr1;
      this.xiaoquid = arr;
    });
    this.http.get("/api/me").then(res => {
      console.log(res);
      this.user = res.data.me;
      this.qu = res.data.me.xiaoqu_name;
      this.bie = res.data.me.sex;
      this.mode = res.data.me.birthday;
      // if (res.data.me.avatar) {
      //   this.imgurl = res.data.me.avatar;
      // } else {
      //   this.imgurl = res.data.me.avatar_format;
      // }
      this.imgurl = res.data.me.avatar
    });
  },
  methods: {
    fanhui() {
      // this.$router.go(-1);
      this.popupVisible1 = true;
    },
    // 头像打开选择器
    toux() {
      this.show = true;
    },
    // 头像选择的关闭
    onCancel() {
      this.show = false;
    },
    // 头像的确认
    onConfirm(value, index) {
      console.log(value, index);
      if (index == 0) {
        this.galleryImgs();
      } else if (index == 1) {
        this.getImage();
      }
    },
    // 小区选择的操作
    // 打开小区的选择器
    xiqou() {
      this.xiaoqus = true;
    },
    // 关闭小区的选择器
    onCancel1() {
      this.xiaoqus = false;
    },
    // 小区选择的确认按钮
    onConfirm1(value, index) {
      this.qu = value;
      this.xiaoqus = false;
      var arr = this.xiaoquid;
      console.log(value, arr[index]);
      this.xqid = arr[index].id;
    },
    // 性别选择的部分
    xinbk() {
      this.xinbie = true;
    },
    onCancelx() {
      // 关闭选择
      this.xinbie = false;
    },
    onConfirmx(value, index) {
      // 性别的确认按钮
      console.log(value, index);
      this.bie = value;
      this.xinbie = false;
    },
    // 时间选择的开关
    tiemry() {
      this.timer = false;
      this.mode = "";
    },
    timerg() {
      this.timer = false;
    },
    timerok(value) {
      var date = new Date(value);
      var date_value =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        "";
      this.mode = date_value;
      this.timer = false;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // 小区的删除
    shan() {
      this.qu = "";
    },
    // 性别的删除
    shan1() {
      this.bie = "";
    },
    // 生日的删除
    shan2() {
      this.timer = true;
      this.mode = "";
    },
    // 头像拍照的测试
    //图片显示
    showPics(url, name) {
      var _this = this;
      //根据路径读取到文件
      plus.io.resolveLocalFileSystemURL(url, function(entry) {
        entry.file(function(file) {
          var fileReader = new plus.io.FileReader();
          fileReader.readAsDataURL(file);
          //  alert(fileReader)
          //  alert(this)
          fileReader.onloadend = function(e) {
            //  alert(e)
            var picUrl = e.target.result.toString();
            // alert(picUrl)
            _this.imgurl = picUrl;
            // alert(_this.imgurl)
          };
        });
        _this.show = false;
      });
    },
    //压缩图片
    compressImage(url, filename) {
      var _this = this;
      var name = "_doc/upload/" + filename;
      plus.zip.compressImage(
        {
          src: url, //src: (String 类型 )压缩转换原始图片的路径
          dst: name, //压缩转换目标图片的路径
          quality: 40, //quality: (Number 类型 )压缩图片的质量.取值范围为1-100
          overwrite: true //overwrite: (Boolean 类型 )覆盖生成新文件
        },
        function(zip) {
          //页面显示图片
          _this.showPics(zip.target, name);
        },
        function(error) {
          plus.nativeUI.toast("压缩图片失败，请稍候再试");
        }
      );
    },

    //调用手机摄像头并拍照
    getImage() {
      var _this = this;
      var cmr = plus.camera.getCamera();
      cmr.captureImage(
        function(p) {
          plus.io.resolveLocalFileSystemURL(
            p,
            function(entry) {
              _this.compressImage(entry.toLocalURL(), entry.name);
            },
            function(e) {
              plus.nativeUI.toast("读取拍照文件错误：" + e.message);
            }
          );
        },
        function(e) {},
        {
          filter: "image"
        }
      );
    },
    //从相册选择照片
    galleryImgs() {
      var _this = this;
      plus.gallery.pick(
        function(e) {
          var name = e.substr(e.lastIndexOf("/") + 1);
          _this.compressImage(e, name);
        },
        function(e) {},
        {
          filter: "image"
        }
      );
    },
    // 最后的保存按钮
    ok() {
      this.popupVisible1 = true;
    },
    // 最后的取消的事件处理
    colse() {
      this.popupVisible1 = false;
    },
    // 最后的保存事件
    tuiok() {
      // alert("保存成功");
      this.http.post("/api/avatar", { avatar: this.imgurl }).then(res => {
        console.log(res);
      });
      this.http
        .post("/api/update", {
          sex: this.bie,
          birthday: this.mode,
          xiaoqu_id: this.xqid
        })
        .then(res => {
          this.$router.replace({ name: "index" });
          this.$toasted.success(res.message).goAway(1000);
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    },
    // 最后的不保存事件
    nobao() {
      this.$router.replace({ name: "index" });
    }
  }
};
</script>
<style scoped>
.information {
  height: 100%;
  width: 100%;
  background: #eeeeee;
}
.information >>> .van-picker__cancel {
  color: #eab617;
}
.information >>> .van-picker__confirm {
  color: #eab617;
}
header {
  height: 1.3rem;
  background: #eab617;
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
.section {
  width: 100%;
  /* height: 10rem; */
  background: pink;
}
.section > div {
  height: 1.1rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #dddddd;
  line-height: 1.1rem;
  line-height: 1.1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
}
.right {
  height: 0.8rem;
  width: 0.6rem;
}
.right1 {
  height: 0.3rem;
  width: 0.3rem;
}
.section > :first-child {
  height: 2rem;
  width: 100%;
  line-height: 2rem;
}
.section > div > div > div {
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 0.2rem;
  background: red;
  line-height: 1;
  margin-top: 0.4rem;
  margin-right: 0.6rem;
  float: right;
  position: relative;
}
.section > div > div > div > :first-child {
  height: 100%;
  width: 100%;
  border-radius: 0.2rem;
}
.section > div > div > div > :last-child {
  position: absolute;
  top: 0.3rem;
  right: -0.7rem;
}
.baocun {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #eab617;
  height: 1rem;
  font-size: 0.3rem;
  color: #fff;
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


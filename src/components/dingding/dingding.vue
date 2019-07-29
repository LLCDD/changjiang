<template>
  <!-- 钉钉 考勤打卡 -->
  <!-- DropdownMenu   多选的下拉事件 -->
  <div class="dingding">
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../assets/img/left0.png" alt />
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 打卡的个人信息简单信息 -->
    <div class="toux">
      <!-- 显示头像 -->
      <p>
        <img src="../../assets/img/xiuday.png" alt />
      </p>
      <!-- 显示姓名和考勤日期 -->
      <div>
        <p>{{ name }}</p>
        <p>
          <!-- <span>考勤组：考勤 (查看规则)</span> -->
          <span @click="kaoqin">考勤组：考勤 (查看规则)</span>
          <span>{{ datatiemr }}</span>
        </p>
      </div>
    </div>
    <!-- 打卡的状态判断 -->
    <!-- 可打卡 -->
    <!-- 正常的上下班的打卡事件 daok -->
    <div class="section" v-if="show == 0" @click="daok">
      <p>
        <span></span>
        <span>上午: {{ shang.am_sign_in_date }} - {{ shang.am_sign_out }}</span>
      </p>
      <p>
        <span></span>
        <span>下午: {{ shang.pm_sign_in }} - {{ shang.pm_sign_out }}</span>
      </p>
      <div class="last">
        <p>上班时间</p>
        <p>{{ hms }}</p>
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
          <p>打卡成功</p>
        </div>
        <p @click="start1">我知道了</p>
      </div>
    </van-popup>
    <!-- 不可打卡 -->
    <!-- 提前的下班事件  dawu-->
    <div class="section" v-if="show == 1" @click="dawu">
      <p>
        <span></span>
        <span>上午: {{ shang.am_sign_in_date }} - {{ shang.am_sign_out }}</span>
      </p>
      <p>
        <span></span>
        <span>下午: {{ shang.pm_sign_in }} - {{ shang.pm_sign_out }}</span>
      </p>
      <div class="last1">
        <p style="font-size:0.28rem">现在不可打卡</p>
        <p>{{ hms }}</p>
      </div>
    </div>

    <!-- 下班异常的打卡样式 -->
    <van-popup v-model="showy">
      <div class="yichangka">
        <!-- 异常打卡的取消事件 -->
        <img @click="yichangcolse" src="../../assets/img/close.png" alt />
        <h3>{{ hms }}</h3>
        <p>还没到下班时间</p>
        <p>你确定要打卡吗?</p>
        <p @click="yihchangko">确定打卡</p>
      </div>
    </van-popup>

    <!-- 底部 -->
    <footer>
      <p>
        <img src="../../assets/img/daka_s.png" alt />
        <span>打卡</span>
      </p>
      <p @click="tongji">
        <!-- 差一张图片 -->
        <img src="../../assets/img/tongji.png" alt />
        <span>统计</span>
      </p>
    </footer>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  data() {
    return {
      msg: "考勤打卡",
      name: localStorage.getItem("username"),
      time: "2019.04.20",
      xia: "17:30",
      //   打卡状态的判断
      shang: 0,
      show: 0,
      //   判断是上班还是下班
      shangban: 0,
      showf: false,
      showf1: false,
      // 下班异常的样式 是否出现
      showy: false,
      datatiemr: "",
      // 上班的实时时间
      hms: "",
      tiemr: null,
      // 打卡的地理位置
      // 经度
      longitude: "",
      // 维度
      latitude: "",
      // 地址
      dizhi: "",
      // 图片的上传
      imgurl: ""
    };
  },
  mounted() {
    this.http.get("/api/sign").then(res => {
      console.log(res);
      this.$toasted.success(res.data.msg).goAway(1000);
      this.shang = res.data;
      // this.shang = res.data.sign_in_date;
      // this.xia = res.data.sign_out_date;
      if (res.data.title.indexOf("上班") > 0) {
        this.show = 0;
        this.shangban = 1;
      } else {
        this.show = 1;
        this.shangban = 0;
      }
    });
    var _this = this;
    this.tiemr = null;
    clearInterval(this.tiemr);
    this.tiemr = setInterval(() => {
      var d = new Date();
      // 打卡的时分秒的获取
      var hours = d.getHours();
      //获得系统分钟;
      var minutes = d.getMinutes();
      //获得系统秒数;
      var second = d.getSeconds();
      // 时分秒的补0
      hours < 10 ? (hours = "0" + hours) : hours;
      minutes < 10 ? (minutes = "0" + minutes) : minutes;
      second < 10 ? (second = "0" + second) : second;

      // console.log(hours + ":" + minutes + ":" + second);
      var hms = hours + ":" + minutes + ":" + second;
      this.hms = hms;
      // 下面时间日期的获取
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      String(curr_month).length < 2
        ? (curr_month = "0" + curr_month)
        : curr_month;
      String(curr_date).length < 2 ? (curr_date = "0" + curr_date) : curr_date;
      var yyyyMMdd = curr_year + "年" + curr_month + "月" + curr_date + "日";
      var yyyyMMdd1 = curr_year + "." + curr_month + "." + curr_date + "";
      this.datatiemr = yyyyMMdd;
      this.time = yyyyMMdd1;
    }, 1000);
    // 获取打卡的地理位置
    plus.geolocation.getCurrentPosition(
      function(p) {
        _this.longitude = p.coords.latitude;
        _this.latitude = p.coords.longitude;
        _this.weizhi = p.addresses;
        // alert('维度:' + p.coords.latitude + '经度:' + p.coords.longitude + '地址:' + p.address.province);
      },
      function(e) {
        // alert('Geolocation error: ' + e.message);
      }
    );
  },
  methods: {
    // 打卡的从新刷新
    once() {
      this.http.get("/api/sign").then(res => {
        console.log(res);
        this.$toasted.success(res.data.msg).goAway(1000);
        this.shang = res.data;
        console.log(res.data.title.indexOf("上班"));
        if (res.data.title.indexOf("上班") > 0) {
          this.show = 0;
          this.shangban = 1;
        } else {
          this.show = 1;
          this.shangban = 0;
        }
      });
    },
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

            if (_this.shangban == 1) {
              console.log("上班时间");
              _this.http
                .post("/api/sign", {
                  image: picUrl,
                  address: "" + _this.weizhi,
                  longitude: _this.longitude,
                  latitude: _this.latitude
                })
                .then(res => {
                  _this.showf = true;
                  _this.once();
                  console.log(res);
                });
            } else {
              _this.http
                .post("/api/sign", {
                  image: picUrl,
                  address: "" + _this.weizhi,
                  longitude: _this.longitude,
                  latitude: _this.latitude
                })
                .then(res => {
                  // localStorage.setItem("tongji", 1);
                  _this.showf1 = true;
                  console.log(res);
                  _this.once();
                });

              console.log("下班时间");
            }
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
    //   返回的事件
    fanhui() {
      this.$router.go(-1);
    },
    //   正常的上班事件
    daok() {
      this.getImage();
    },
    // 上班打卡成功
    start() {
      this.showf = false;
    },
    // 下班打卡成功
    start1() {
      this.showf1 = false;
    },
    // 打卡异常的事件
    dawu() {
      this.showy = true;
    },
    // 异常打卡的取消事件
    yichangcolse() {
      this.showy = false;
    },
    // 异常打卡的确定事件
    yihchangko() {
      var _this = this;
      this.showy = false;
      this.getImage();
      // 下面是 异常打卡的逻辑处理
      // 。。。。。。。
      // _this.http
      //   .post("/api/sign", {
      //     image: _this.imgurl,
      //     address: "" + _this.weizhi,
      //     longitude: _this.longitude,
      //     latitude: _this.latitude
      //   })
      //   .then(res => {
          
      //     console.log(res);
      //     _this.once();
      //   });
        // _this.showf1 = true;
      console.log("下班时间");
    },
    // 去统计的页面
    tongji() {
      this.$router.replace({ name: "dingtongji" });
    },
    // 考勤规则的详情
    kaoqin() {
      this.$router.push("/guizeka");
    }
  },
  // 组建销毁
  destroyed() {
    this.tiemr = null;
    clearInterval(this.tiemr);
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
  position: relative;
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
  line-height: 0.9rem;
}
.yichangka > img {
  position: absolute;
  height: 0.8rem;
  width: 0.8rem;
  right: 0.3rem;
  top: 0.3rem;
}
</style>

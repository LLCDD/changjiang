import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    // 注册 register
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 登录的页面  login
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/login/login'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 岗位的首页  index
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/index/index'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 个人信息  information
    {
      path: '/information',
      name: 'information',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/information/information'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // MoreSettings   更多设置
    {
      path: '/MoreSettings',
      name: 'MoreSettings',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/MoreSettings/MoreSettings'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 考勤打卡
    {
      path: '/dingding',
      name: 'dingding',
      component: () =>
        import(/* webpackChunkName: "dingding" */ './components/dingding/dingding'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 打卡的统计
    {
      path: '/dingtongji',
      name: 'dingtongji',
      component: () =>
        import(/* webpackChunkName: "dingtongji" */ './components/dingtongji/dingtongji'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 工程岗位的工作通知
    {
      path: '/workorder',
      name: 'workorder',
      component: () =>
        import(/* webpackChunkName: "workorder" */ './components/workorder/workorder'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 考勤的规则 
    {
      path: '/guizeka',
      name: 'guizeka',
      component: () =>
        import(/* webpackChunkName: "guizeka" */ './components/guizeka/guizeka'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 业主的查询 yezhucha
    {
      path: '/yezhucha',
      name: 'yezhucha',
      component: () =>
        import(/* webpackChunkName: "guizeka" */ './components/yezhucha/yezhucha'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 工程岗的维修日志
    {
      path: '/gweixiu',
      name: 'gweixiu',
      component: () =>
        import(/* webpackChunkName: "gweixiu" */ './components/gongchenggangz/gweixiu'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 客服岗的停车费
    {
      path: '/stopmoney',
      name: 'stopmoney',
      component: () =>
        import(/* webpackChunkName: "stopmoney" */ './components/kefu/stopmoney'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 客服岗的业主报修
    {
      path: '/yezhuxiu',
      name: 'yezhuxiu',
      component: () =>
        import(/* webpackChunkName: "yezhuxiu" */ './components/kefu/yezhixiu'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 客服岗的祝福提醒
    {
      path: '/zhufu',
      name: 'zhufu',
      component: () =>
        import(/* webpackChunkName: "zhufu" */ './components/kefu/zhufu'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
     // 客服岗的来访日志
     {
      path: '/laifang',
      name: 'laifang',
      component: () =>
        import(/* webpackChunkName: "laifang" */ './components/kefu/laifang'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 客服岗的广告费
    {
      path: '/guangao',
      name: 'guangao',
      component: () =>
        import(/* webpackChunkName: "laifang" */ './components/kefu/guangao'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 客服岗的工作通知
    {
      path: '/worktong',
      name: 'worktong',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/kefu/worktong'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 客服岗的回访日志
    {
      path: '/huifang',
      name: 'huifang',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/kefu/huifang'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的保洁考勤
    {
      path: '/baojie',
      name: 'baojie',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/louguan/baojie'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的消防巡查
    {
      path: '/xiaofang',
      name: 'xiaofang',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/louguan/xiaofang'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的供水巡查
    {
      path: '/gongshui',
      name: 'gongshui',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/louguan/gongshui'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的电梯巡查
    {
      path: '/dianti',
      name: 'dianti',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/louguan/dianti'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的官网巡查
    {
      path: '/guangwang',
      name: 'guangwang',
      component: () =>
        import(/* webpackChunkName: "worktong" */ './components/louguan/guangwang'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的卫生绿化
    {
      path: '/weisheng',
      name: 'weisheng',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/louguan/weisheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的装修违建
    {
      path: '/zhuangxiu',
      name: 'zhuangxiu',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/louguan/zhuangxiu'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的其他设施
    {
      path: '/qita',
      name: 'qita',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/louguan/qita'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 楼管岗的工作通知
    {
      path: '/workzhi',
      name: 'workzhi',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/louguan/tongzhi'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服日志
    {
      path: '/managerkefu',
      name: 'managerkefu',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/manager/kefu'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗日志
    {
      path: '/managerlouguan',
      name: 'managerlouguan',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/manager/louguan'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的工程岗日志
    {
      path: '/managergongcheng',
      name: 'managergongcheng',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/manager/gongcheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的工作通知
    {
      path: '/jinglitongzhi',
      name: 'jinglitongzhi',
      component: () =>
        import(/* webpackChunkName: "weisheng" */ './components/manager/work'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服岗的回访日志
    {
      path: '/service',
      name: 'service',
      component: () =>
        import(/* webpackChunkName: "service" */ './components/managers/kefu/huifang'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服回访日志的审批
    {
      path: '/shenpi/:id',
      name: 'shenpi',
      component: () =>
        import(/* webpackChunkName: "service" */ './components/managers/kefu/shengpi'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服来访日志的 visiting
    {
      path: '/visiting',
      name: 'visiting',
      component: () =>
        import(/* webpackChunkName: "service" */ './components/managers/kefu/laifang'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服来访日志的审批
    {
      path: '/laifangshen/:id',
      name: 'laifangshen',
      component: () =>
        import(/* webpackChunkName: "service" */ './components/managers/kefu/laifangshen'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服来访日志的停车日志 stopcar
    {
      path: '/stopcar',
      name: 'stopcar',
      component: () =>
        import(/* webpackChunkName: "stopcar" */ './components/managers/kefu/stopcar'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗客服来访日志的审批
    {
      path: '/stoppi/:id',
      name: 'stoppi',
      component: () =>
        import(/* webpackChunkName: "stoppi" */ './components/managers/kefu/stoppi'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的客服广告日志 guangao
    {
      path: '/guangao1',
      name: 'guangao',
      component: () =>
        import(/* webpackChunkName: "guangao" */ './components/managers/kefu/guangao'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // guanggaoshen  经理岗的客服广告日志的审批
    {
      path: '/guanggaoshen/:id',
      name: 'guanggaoshen',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/kefu/guanggaoshen'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // gongcheng  经理岗的工程岗维修日志
    {
      path: '/gongvheng',
      name: 'gongvheng',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/gongcheng/gongcheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // shengong 经理岗的工程维修审批
    {
      path: '/shengong/:id',
      name: 'shengong',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/gongcheng/shenggong'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的保洁考勤
    {
      path: '/baojiekao',
      name: 'baojiekao',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/lou/baojiekao'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的保洁考勤审批
    {
      path: '/baojiesheng/:id',
      name: 'baojiesheng',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/lou/baojiesheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的消防巡查
    {
      path: '/xiaofangcha',
      name: 'xiaofangcha',
      component: () =>
        import(/* webpackChunkName: "xiaofangcha" */ './components/managers/lou/xiaofangcha'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的消防巡查审批
    {
      path: '/xiaofangsheng/:id',
      name: 'xiaofangsheng',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/lou/xiaofangsheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的供水巡查
    {
      path: '/gongshuicha',
      name: 'gongshuicha',
      component: () =>
        import(/* webpackChunkName: "gongshuicha" */ './components/managers/lou/gongshuicha'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的供水巡查审批
    {
      path: '/gongshuisheng/:id',
      name: 'gongshuisheng',
      component: () =>
        import(/* webpackChunkName: "guanggaoshen" */ './components/managers/lou/gongshuisheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的电梯巡查
    {
      path: '/dianticha',
      name: 'dianticha',
      component: () =>
        import(/* webpackChunkName: "gongshuicha" */ './components/managers/lou/dianticha'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的电梯巡查审批
    {
      path: '/diantisheng/:id',
      name: 'diantisheng',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/managers/lou/diantisheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的官网巡查
    {
      path: '/wangguancha',
      name: 'wangguancha',
      component: () =>
        import(/* webpackChunkName: "gongshuicha" */ './components/managers/lou/wangguancha'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的官网巡查审批
    {
      path: '/wangguansheng/:id',
      name: 'wangguansheng',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/managers/lou/wangguansheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的官网巡查
    {
      path: '/weishenglv',
      name: 'weishenglv',
      component: () =>
        import(/* webpackChunkName: "weishenglv" */ './components/managers/lou/weishenglv'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的官网巡查审批
    {
      path: '/weishengsheng/:id',
      name: 'weishengsheng',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/managers/lou/weishengsheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的装修违建
    {
      path: '/zhuangxiujian',
      name: 'zhuangxiujian',
      component: () =>
        import(/* webpackChunkName: "weishenglv" */ './components/managers/lou/zhuangxiujian'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的装修违建审批
    {
      path: '/zhuangxiusheng/:id',
      name: 'zhuangxiusheng',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/managers/lou/zhuangxiusheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的其他设施
    {
      path: '/qitaa',
      name: 'qita',
      component: () =>
        import(/* webpackChunkName: "weishenglv" */ './components/managers/lou/qita'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 经理岗的楼管岗的装修违建审批
    {
      path: '/qitasheng/:id',
      name: 'qitasheng',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/managers/lou/qitasheng'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 便利岗的订单通知
    {
      path: '/dingdantong',
      name: 'dingdantong',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/bianligang/Commodity/dingdan.vue'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 便利岗的订单详情
    {
      path: '/dingdanxq',
      name: 'dingdanxq',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/bianligang/Commodity/danxiangqin.vue'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 便利岗的商品管理
    {
      path: '/guanshang',
      name: 'guanshang',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/bianligang/Commoditymanagement/shangpin.vue'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 便利岗的商品管理的商品添加 shanpingjia
    {
      path: '/shanpingjia',
      name: 'shanpingjia',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/bianligang/Commoditymanagement/shanpingjia.vue'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 便利岗的商品管理的商品详情 shangpxq
    {
      path: '/shangpxq/:id',
      name: 'shangpxq',
      component: () =>
        import(/* webpackChunkName: "diantisheng" */ './components/bianligang/Commoditymanagement/shangpxq.vue'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!getToken()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    console.log(to.matched)
    next()
  }
})

export default router

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

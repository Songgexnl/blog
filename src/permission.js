import router from "./router";

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title == undefined?'____社区':to.meta.title

  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限

    const token = window.localStorage.getItem("token")
    // console.log("------------" + token)

    if (token) { // 判断当前的token是否存在 ； 登录存入的token
      if (to.path === '/login') {

      } else {
        next()
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
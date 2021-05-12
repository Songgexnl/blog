import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Persion from '../views/Persion.vue'
import Register from '../views/Register.vue'
import PersonEdit from '../views/PersonEdit.vue'
import Pinfo from '../views/Pinfo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: {name: "Blogs"},
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },
  {
    path: '/persion',
    name: 'Persion',
    component: Persion
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: ()=>import('../views/recommend/Recommend.vue')
  },
  {
    path:'/chatview',
    name:'Chatview',
    component:()=>import('../views/Chatview.vue')
  },
  {
    path: '/persondit',
    name: 'PersonEdit',
    component: PersonEdit,
    redirect: '/persondit/personz',
    children:[
      {
        path: '/persondit/personz',
        name: 'Personz',
        component:()=>import('../views/Personz.vue'), 
        redirect: '/persondit/personz/pinfo',

        children:[
          {
            path: '/persondit/personz/pinfo',
            name: 'Pinfo',
            component:Pinfo,
          },
          {
            path: '/persondit/personz/cinfo',
            name: 'Cinfo',
            component:()=>import('../views/Cinfo.vue'),
            }
        ]
      },
      {
        path: '/persondit/nummanage',
        name: 'NumManage',
        component:()=>import('../views/perh/NumManage.vue'),
      },
      {
        path: '/persondit/save',
        name: 'Save',
        component:()=>import('../views/perh/Save.vue'),
      },
      {
        path:'/persondit/blogmag',
        name:'BlogMag',
        component:()=>import('../views/perh/BlogMag.vue')
      }
    ]
  },

  
  
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    redirect: '/login/singup',
    children:[
        {
          path: '/login/singup',
          name: 'Singup',
          component:()=>import('../components/Singin/Singup'), 
        },
        {
          path: '/login/singon',
          name: 'Singon',
          component:()=>import('../components/Singin/Singon'), 
        },
    ]
  },
 
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail,
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

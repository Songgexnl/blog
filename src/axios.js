import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'



// axios.defaults.withCredentials=true;
axios.defaults.baseURL = "http://10.20.81.129:8080"


// 前置拦截
axios.interceptors.request.use(config => {
  
    // if (localStorage.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${localStorage.token}`;
    // }
    return config;
  // },
  // err => {
  //   return Promise.reject(err);
  })

//后置拦截
axios.interceptors.response.use(response => {
    // let res = response.data;
    let res = response;

    console.log("=================")
    console.log(res)
    console.log("=================")
    // if (res.code === 200) {
    if (res.status===200) {

      return response
    } else {

      Element.Message.error('有问题啊哦', {duration: 3 * 1000})

      return Promise.reject(response.data.message)
    }
  },
  error => {
    console.log(error)
    if(error.response.data) {
      error.message = error.response.data.msg
    }

    if(error.response.status === 401) {
      store.commit("REMOVE_INFO")
      router.push("/login")
    }

    Element.Message.error(error.message, {duration: 3 * 1000})
    return Promise.reject(error)
  }
)
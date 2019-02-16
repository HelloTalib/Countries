import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase';
import Home from './views/Home.vue'
import AddCountry from './views/AddCountry.vue'
import EditCountry from './views/EditCountry.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add',
      name: 'AddCountry',
      component: AddCountry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:country_id',
      name: 'EditCountry',
      component: EditCountry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        requiresGuest:true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta:{
        requiresGuest:true
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    let user = firebase.auth().currentUser
    if(user){
      next()
    }else{
      next({name:'Login'})
    }
  }else{
    next()
  }
})


export default router;
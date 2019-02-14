<template>
  <nav class="nav-wrapper indigo">
    <div class="container">
      <router-link to="/" class="brand-logo">Countries</router-link>
      <ul class="right">
        <li v-if="!user">
          <router-link :to="{name:'Login'}">Login</router-link>
        </li>
        <li v-if="!user">
          <router-link :to="{name:'Signup'}">Signup</router-link>
        </li>
      <li v-if="user"> {{user.email}}</li>
       <li v-if="user"><a @click="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name:'Nuvbar',
  data() {
    return {
      user:null
    };
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.go('/')
      })
    }
  },
  created(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.user = user
        }else{
          this.user = null
        }
      })
    }
};
</script>

<style>
</style>

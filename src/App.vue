<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/layout/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>

<style>
body{
  background-color:rgb(211, 237, 252)
}
</style>

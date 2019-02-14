<template>
  <div class="add-smoothie container z-depth-1">
    <h2 class="center-align indigo-text">Edit Country Name</h2>
    <form @submit.prevent="editSmoothie">
      <div class="input-field title">
        <input type="text" name="id" v-model="smoothie.smoothies_id">
        <label for="code">Country Code:</label>
      </div>
      <div class="input-field title">
        <input type="text" name="title" v-model="smoothie.title">
        <label for="title">Cantry Name:</label>
      </div>
            <div class="field center-align">
        <button class="btn indigo">Update Country</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'EditSmoothie',
  data(){
    return{
      smoothie: null
    }
  },
methods:{
  editSmoothie() {
      if (this.smoothie.title) {
        db.collection("smoothies").doc(this.smoothie.id).update({
          title: this.smoothie.title,
          smoothies_id: this.smoothie.smoothies_id
        }).then(() => {
            this.$router.push('/')
        }).catch(err => {
            console.log(err)
        })
      }
    }
},
  created() {
    let ref = db.collection('smoothies').where('smoothies_id', '==', this.$route.params.smoothie_id)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>
 
<style>
 
</style>
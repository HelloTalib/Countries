<template>
  <div>
    <div class="container signup">
      <div class="row">
        <div class="indigo card-panel white-text center">
          <h3>Login</h3>
          <form @submit.prevent="login">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input class="white-text" type="email" id="email" v-model="email" required>
              <label for="email">Email:</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input class="white-text" type="password" id="password" v-model="password" required>
              <label for="password">Password:</label>
            </div>
            <p v-if="feedback" class="red-text">{{feedback}}</p>
            <button class="btn white darken-2 black-text">login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
       this.$router.push({name:'Home'})
      }).catch(err => {
        this.feedback= (err.message)
      })
    }
  }
};
</script>



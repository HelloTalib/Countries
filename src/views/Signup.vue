<template>
  <div>
    <div class="container signup">
      <div class="row">
        <div class="indigo card-panel white-text center">
          <h3>Signup</h3>
          <form @submit.prevent="signup">
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
            <p v-if="feedback">{{feedback}}</p>
            <button class="btn white darken-2 black-text">signup</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "signup",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(err => {
          this.feedback = err.message;
        });
    }
  }
};
</script>


<style>
.signup {
  margin-top: 20px;
  padding: 20px;
  max-width: 500px;
}
.signup h2 {
  font-size: 2em;
  margin: 20px auto;
}
.signup .field {
  margin: 20px auto;
  position: relative;
}
.signup .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>


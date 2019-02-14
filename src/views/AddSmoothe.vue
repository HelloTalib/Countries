<template>
  <div class="add-smoothie container z-depth-1">
    <h2 class="center-align indigo-text">Add Country</h2>
    <form @submit.prevent="addSmoothie">
      <div class="input-field title">
        <input type="text" name="id" v-model="smoothies_id">
        <label for="id">Country code:</label>
      </div>
      <div class="input-field title">
        <input type="text" name="title" v-model="title">
        <label for="title">Country Name:</label>
      </div>
            <div class="field center-align">
        <button class="btn pink">Add Country</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      items: [],
      smoothies_id: null
    };
  },
  methods: {
    addSmoothie() {
      if (this.title) {
        db.collection("smoothies")
          .add({
            title: this.title,
            items: this.items,
            smoothies_id: this.smoothies_id
          })
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
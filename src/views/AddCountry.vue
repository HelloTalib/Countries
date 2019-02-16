<template>
  <div class="add-country container z-depth-1">
    <h2 class="center-align indigo-text">Add Country</h2>
    <form @submit.prevent="addcountry">
      <div class="input-field title">
        <input type="text" name="id" v-model="country_id">
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
  name: "AddCountry",
  data() {
    return {
      title: null,
      items: [],
      country_id: null
    };
  },
  methods: {
    addcountry() {
      if (this.title) {
        db.collection("countries")
          .add({
            title: this.title,
            items: this.items,
            country_id: this.country_id
          })
          .then(() => {
            this.$router.push("/");
          });
      }
    }
  }
};
</script>

<style>
.add-country {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-country h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-country .field {
  margin: 20px auto;
  position: relative;
}
.add-country .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
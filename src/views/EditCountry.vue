<template>
  <div class="add-country container z-depth-1">
    <h2 class="center-align indigo-text">Edit Country Name</h2>
    <form @submit.prevent="editCountry">
      <div class="input-field title">
        <input type="text" name="id" v-model="country.countries_id">
        <label for="code">Country Code:</label>
      </div>
      <div class="input-field title">
        <input type="text" name="title" v-model="country.title">
        <label for="title">Cantry Name:</label>
      </div>
      <div class="field center-align">
        <button class="btn indigo">Update Country</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "EditCountry",
  data() {
    return {
      country: null
    };
  },
  methods: {
    editCountry() {
      if (this.country.title) {
        db.collection("countries")
          .doc(this.country.id)
          .update({
            title: this.country.title,
            country_id: this.country.country_id
          })
          .then(() => {
            this.$router.push("/");
          });
      }
    }
  },
  created() {
    let ref = db
      .collection("countries")
      .where("countries_id", "==", this.$route.params.country_id);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.country = doc.data();
        this.country.id = doc.id;
      });
    });
  }
};
</script>
 
<style>
</style>
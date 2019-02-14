<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <div>
          <router-link
            class="edit"
            :to="{name: 'EditSmoothe', params:{smoothie_id: smoothie.smoothies_id}}"
          >
            <i class="material-icons right">visibility</i>
          </router-link>
        </div>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="items">
          <li v-for="(ing, index) in smoothie.items" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
        <div class="fixed-action-btn">
          <router-link :to="{name:'AddSmoothe'}" class="btn-floating btn-large halfway-fab indigo">
            <i class="material-icons">add</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Index",
  data() {
    return {
      smoothies: []
    };
  },
  created() {
    db.collection("smoothies").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.smoothies.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  },
  methods: {}
};
</script>

















<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .items {
  margin: 30px auto;
}
.index .items li {
  display: inline-block;
}
.index .edit {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
.fixed-action-btn {
  margin-bottom: 40px;
}
</style>
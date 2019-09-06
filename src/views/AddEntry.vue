<template>
  <span>
    <AppNavigation :title="title"></AppNavigation>
    <v-content>
      <v-container>
        <v-card class="mx-auto mb-5" max-width="344">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Add Entry</v-toolbar-title>
          </v-toolbar>
          <v-card-text style="width: auto">
            <v-form ref="form">
              <v-text-field name="date" label="Date" type="date" v-model="date" required></v-text-field>
              <v-text-field name="name" label="Name" id="name" type="text" required v-model="name"></v-text-field>
              <v-text-field
                name="count"
                label="Count"
                id="count"
                type="number"
                required
                v-model="count"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="addEntry">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </span>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
const fb = require("@/firebase/index.js");

export default {
  name: "AddEntry",
  data() {
    return {
      title: "Add Entry",
      date: null,
      name: null,
      count: null
    };
  },
  methods: {
    addEntry() {
      this.$store.dispatch("addEntry", {
        date: this.date,
        name: this.name,
        count: this.count
      });
      //   console.log(this.$store.state.user.user.uid);
      //   fb.workoutsCollection.add({
      //     createdOn: this.date,
      //     name: this.name,
      //     count: this.count,
      //     userId: null
      //   });
    }
  },
  components: {
    AppNavigation
  }
};
</script>

<style scoped>
</style>
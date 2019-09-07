
<template>
  <div>
    <v-navigation-drawer class="grey darken-4" v-model="drawer" dark app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content @click="$router.push({ name: item.url })">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn @click="signOut" block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="grey darken-4" dark app>
      <v-btn color="green accent-4" dark small absolute bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <!-- <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Entries', icon: 'dashboard', url: 'entries' },
        { title: 'Workouts', icon: 'dashboard' },
        { title: 'Analytics', icon: 'account_box' },
        { title: 'History', icon: 'gavel' }
      ]
    };
  },
  props: ['title'],
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    }
  }
};
</script>

<style scoped>
</style>
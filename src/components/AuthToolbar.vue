<template>
  <v-app-bar color="grey darken-4" dark absolute collapse flat>
    <v-btn @click="$router.go(-1)" icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AuthToolbar'
};
</script>

<style scoped>
</style>
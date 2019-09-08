<template>
  <v-content>
    <AppNavigation :title="title" />
    <v-container>
      <EntryList></EntryList>
    </v-container>
  </v-content>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import EntryList from '@/components/EntryList';

export default {
  name: 'Entries',
  data: function() {
    return {
      title: 'Entries'
    };
  },
  components: {
    AppNavigation,
    EntryList
  }
};
</script>

<style scoped>
</style>
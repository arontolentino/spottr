<template>
  <span>
    <AppNavigation :title="title"></AppNavigation>
    <v-content>
      <v-container>
        <EntryList></EntryList>
      </v-container>
    </v-content>
  </span>
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
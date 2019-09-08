<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>

<style>
html {
  background-color: #fafafa;
}

.v-application {
  left: 0;
  right: 0;
  top: 44px;
  bottom: 34px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  contain: layout size style;
  overflow: hidden;
  z-index: 0;
}

.v-navigation-drawer {
  height: 100% !important;
}

.container {
  height: calc(100vh - 134px);
  overflow-y: scroll;
}
</style>

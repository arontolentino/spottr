<template>
  <v-content id="register">
    <AuthToolbar />
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <div>
            <h1 class="display-2 text-center font-weight-black font-italic mb-10" dark>SPOTTER</h1>
          </div>

          <AuthForm :title="title" :form="form" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import AuthToolbar from './../components/AuthToolbar';
import AuthForm from './../components/AuthForm';

export default {
  name: 'SignUp',
  data() {
    return {
      title: 'Create Account',
      form: 'register'
    };
  },
  components: {
    AuthToolbar,
    AuthForm
  }
};
</script>

<style scoped>
#register {
  background-color: #212121;
  color: #fff;
}
</style>
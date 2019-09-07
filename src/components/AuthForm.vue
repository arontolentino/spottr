<template>
  <div max-width="344" class="mx-auto text-center" flat>
    <h2 class="title mb-5" dark>{{ title }}</h2>
    <v-form ref="form" v-model="valid" class="px-2" lazy-validation>
      <v-text-field
        name="email"
        label="Email"
        type="email"
        v-model="email"
        :rules="emailRules"
        outlined
        required
        single-line
        background-color="white"
      ></v-text-field>

      <v-text-field
        name="password"
        label="Password"
        id="password"
        type="password"
        v-model="password"
        :rules="passwordRules"
        outlined
        required
        single-line
        background-color="white"
      ></v-text-field>

      <v-btn
        v-if="form === 'login'"
        large
        block
        color="green accent-4"
        class="mb-5"
        :disabled="!valid"
        @click.enter="logIn"
      >Sign In</v-btn>

      <v-btn
        v-else
        large
        block
        color="green accent-4"
        class="mb-5"
        :disabled="!valid"
        @click.enter="signUp"
      >Register</v-btn>
    </v-form>

    <p v-if="form === 'login'">
      Not registered yet?
      <router-link to="/register" style="color: #00C853">Create an account</router-link>
    </p>

    <p v-else>
      By creating an account, you agree to the Spotter
      <router-link to="/" style="color: #00C853">Terms of Service</router-link>and
      <router-link to="/" style="color: #00C853">Privacy Policy.</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be greater than 6 characters'
      ]
    };
  },
  props: ['title', 'cta', 'form'],
  methods: {
    logIn() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('logIn', {
          email: this.email,
          password: this.password
        });
      }
    },

    signUp() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signUp', {
          username: this.username,
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>
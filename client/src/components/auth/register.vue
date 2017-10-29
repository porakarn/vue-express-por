<template>
  <div class="register">
    <div class="row">
      <div class="col-md-8 col-md-offset-8">

        <h1>Register</h1>
        <br>
        <!-- Email -->
        <at-input placeholder="Email"
                  v-model="email"
                  type="email"
        ></at-input><br>

        <!-- Password -->
        <at-input placeholder="Password"
                  v-model="password"
                  type="password"
        ></at-input><br>

        <!-- Error -->
        <div v-if="error">
          <at-alert message="" 
                    v-html="error"
                    type="error"
                    closable>
          </at-alert><br>
        </div>

        <!-- Submit -->
        <at-button @click="register">Register</at-button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
          token: response.data.token
        }).then(() => {
          this.$router.push({
            name: 'Home'
          })
        })
      } catch (error) {
        this.error = error.response.data.errors[0].error
      }
    }
  }
}
</script>
<template>
  <at-menu mode="horizontal" active-Name="1">
    <div class="container">
      <!-- Home -->
      <router-link :to="{ name: 'Home' }">
        <at-menu-item name="1">
          <i class="icon icon-home"></i>
          Home
        </at-menu-item>
      </router-link>

      <div >
        <router-link :to="{ name: 'Courses' }">
          <at-menu-item name="2">Course</at-menu-item>
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Addcourse' }">
          <at-menu-item name="2">Add Course</at-menu-item>
        </router-link>
      </div>

      <div class="pull-right">

        <div v-if="!isLoggedIn">

          <!-- Login -->
          <router-link :to="{ name: 'Login' }">
            <at-menu-item name="3">Login</at-menu-item>
          </router-link>

          <!-- Register -->
          <router-link :to="{ name: 'Register' }">
            <at-menu-item name="4">Register</at-menu-item>
          </router-link>
        </div>

        <div v-if="isLoggedIn">
          <!-- Profile -->
          <at-submenu>
            <template slot="title"><i class="icon icon-user"></i>Profile</template>
            <!-- Logout -->
            <at-menu-item name="1-2">
              <a href="#" v-on:click="logout()">
                <i class="icon icon-unlock"></i>Logout
              </a>
            </at-menu-item>
          </at-submenu>

        </div>

      </div>

    </div>
  </at-menu>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

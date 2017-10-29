<template>
  <div id="app">
    <!-- Header Nav -->
    <HeaderNav />

    <!-- Spacing -->
    <div style="height: 20px" />

    <!-- Body -->
    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import HeaderNav from '@/components/partials/HeaderNav.vue'

export default {
  name: 'app',
  components: {
    HeaderNav
  }
}
</script>


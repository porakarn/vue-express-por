<template>
  <div class="home">

    <div class="row" style="margin-bottom: 24px;">
      <at-switch :value="true" @change="changeTheme">
        <span slot="checkedText">Dark</span>
        <span slot="unCheckedText">Light</span>
      </at-switch>
      <at-radio-group v-model="mode" style="margin-left: 40px;">
        <at-radio label="inline">Inline</at-radio>
        <at-radio label="horizontal">Horizontal</at-radio>
        <at-radio label="vertical">Vertical</at-radio>
      </at-radio-group>
    </div>
    <at-menu :theme="theme" :mode="mode" active-Name="0" >
      <at-menu-item name="0" disabled><i class="icon icon-box"></i>Submenu</at-menu-item>
      <at-submenu>
        <template slot="title"><i class="icon icon-home"></i>Navigation One</template>
        <at-menu-item-group title="Group One">
          <at-menu-item name="1-1">Submenu One</at-menu-item>
          <at-menu-item name="1-2">Submenu Two</at-menu-item>
        </at-menu-item-group>
        <at-menu-item-group title="Group Two">
          <at-menu-item name="1-3">Submenu Three</at-menu-item>
          <at-menu-item name="1-4">Submenu Four</at-menu-item>
        </at-menu-item-group>
      </at-submenu>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>สอนการใช้งาน</template>
        <at-menu-item name="2-1">Submenu One</at-menu-item>
        <at-menu-item name="2-2">Submenu Two</at-menu-item>
        <at-menu-item name="2-3" disabled>Submenu Three</at-menu-item>
        <at-menu-item name="2-4">Submenu Four</at-menu-item>
      </at-submenu>
      <at-submenu>
        <template slot="title"><i class="icon icon-command"></i>Navigation Three</template>
        <at-menu-item name="3-1">Submenu One</at-menu-item>
        <at-menu-item name="3-2">Submenu Two</at-menu-item>
        <at-menu-item name="3-3">Submenu Three</at-menu-item>
        <at-menu-item name="3-4">Submenu Four</at-menu-item>
      </at-submenu>
      <at-submenu disabled>
        <template slot="title"><i class="icon icon-inbox"></i>Navigation Four</template>
        <at-menu-item name="4-1">Submenu One</at-menu-item>
        <at-menu-item name="4-2">Submenu Two</at-menu-item>
      </at-submenu>
    </at-menu>




  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

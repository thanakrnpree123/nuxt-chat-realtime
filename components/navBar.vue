<template>
  <div>
    <a-layout-sider theme="light"></a-layout-sider>
    <div class="logo" />
    <a-menu mode="inline" style="height:100vh;padding-top:20%">
      <a-menu-item key="1">
        <nuxt-link to="/">
          <a-icon type />
          <span>Home</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="login">
          <a-icon type="mail" />
          <span>Login</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="3">
        <nuxt-link to="chat">
          <a-icon type="mail" />
          <span>Chat</span>
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>

  <!-- <a-menu style="width: 256px" mode="vertical">
      <a-menu-item key="0">
        <nuxt-link to="/">
          <a-icon type />
          <span>Home</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="1">
        <nuxt-link to="login">
          <a-icon type="mail" />
          <span>Login</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="calendar" />Navigation Two
      </a-menu-item>
  </a-menu>-->
</template>

<script>
export default {

}
</script>

<style>
</style>